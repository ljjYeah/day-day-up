const path = require('path');
const webpack = require('webpack');

console.log(webpack);
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /.(png|jpg|jpeg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}