const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
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
      chunks: ['vendors', fileName],
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
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75
            }
          }
        ]
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
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css'
    }),
    ...htmlWebpackPluginsArr
  ]
}