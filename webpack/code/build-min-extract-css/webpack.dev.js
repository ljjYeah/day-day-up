const path =- require('path');
const webpack = require('webpack');
const webpackCommonConf = require('./webpack.common');
const { smart } = require('webpack-merge');
const { srcPath,distPath } = require('./path');

module.exports = smart(webpackCommonConf, {
    mode: 'development',
    module: {
        rules: [
            {
                // 直接引入图片
                test: /.(png|jpg|jpeg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify('development')
        })
    ],
    devServer: {
        port: 8080,
        progress: true, //显示打包的进度条
        contentBase: distPath, // 根目录
        open: true, //自动打开浏览器
        compress: true, // 启动gzip压缩
        // 设置代理
        proxy: {
            '/api': 'http://localhost: 3000',
            '/api2': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '/api2': ''
                }
            }
        }
    }
});