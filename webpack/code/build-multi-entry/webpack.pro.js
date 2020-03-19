const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackCommonConf = require('./webpack.common');
const { smart } = require('webpack-merge');
const { srcPath, distPath } = require('./path');

module.exports = smart(webpackCommonConf, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash:8].js',
        path: distPath
    },
    module: {
        rules: [
            {
                test: /.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 5*1024,
                        outputPath: '/img1/',
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),// 会默认清空output.path定义的文件夹下的内容，即dist目录
        new webpack.DefinePlugin({
            DEV: JSON.stringify('production')
        })
    ]
});
