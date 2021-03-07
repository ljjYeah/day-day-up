const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const setMPA = () => {
  let entry = {};
  let htmlWebpackPluginsArr = [];
  const filePaths = glob.sync(path.join(__dirname, 'src/*/index.js'));
  filePaths.forEach(item => {
    const fileName = (item.match(/src\/(.*)\/index.js$/))[1];
    entry[fileName] = item;
    htmlWebpackPluginsArr.push(new HtmlWebpackPlugin({
      template: path.join(__dirname, `./src/${fileName}/index.html`),
      filename: `${fileName}.html`,
      chunks: [fileName],
      scriptLoading: 'blocking',
      inject: 'body'
    }))
  });
  return {
    entry,
    htmlWebpackPluginsArr
  }
};

const { entry, htmlWebpackPluginsArr } = setMPA();


module.exports = {
  mode: 'production',
  entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name][chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top',
              singleton: true
            }
          },
          'css-loader'
        ]
      },
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    ...htmlWebpackPluginsArr
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  }
}