const path = require('path');
const webpack = require('webpack');
const webpackCommonConf = require('./webpack.common');
const { smart } = require('webpack-merge');
const HotModuleReplacePlugin = require('webpack/lib/HotModuleReplacementPlugin');
const { srcPath,distPath } = require('./path');

module.exports = smart(webpackCommonConf, {
    mode: 'development',
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:8080/',
            'webpack/hot/dev-server',
            path.join(srcPath, 'index.js')
        ],
        other: path.join(srcPath, 'other.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader?cacheDirectory'],
                include: srcPath,
                // exclude: /node_modules/
            },
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
        }),
        new HotModuleReplacePlugin()
    ],
    devServer: {
        port: 8080,
        progress: true, //显示打包的进度条
        contentBase: distPath, // 根目录
        open: true, //自动打开浏览器
        compress: true, // 启动gzip压缩
        hot: true, // 启动热更新
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