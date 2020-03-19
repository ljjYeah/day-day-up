const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {srcPath, distPath} = require('./path');

module.exports = {
    entry: {
        index: path.join(srcPath, 'index.js'),
        other: path.join(srcPath, 'other.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: "index.html",
            // chunks表示该页面要引用那些chunk
            chunks: ['index'] // 只引用index.js
        }),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'other.html'),
            filename: "other.html",
            chunks: ['other'] // 只引用other.js
        })
    ]
};
