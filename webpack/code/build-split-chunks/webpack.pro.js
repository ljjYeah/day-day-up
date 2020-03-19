const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { smart } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css
const TerserPlugin = require('terser-webpack-plugin'); // 压缩
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css

const webpackCommonConf = require('./webpack.common');
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
            },
            {
                test: /\.css$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),// 会默认清空output.path定义的文件夹下的内容，即dist目录
        new webpack.DefinePlugin({
            DEV: JSON.stringify('production')
        }),
        // 抽离css文件
        new MiniCssExtractPlugin({
            filename: 'css/main.[contentHash:8].css'
        })
    ],
    optimization: {
        // 压缩css
        minimizer: [
            new TerserPlugin({}),
            new OptimizeCssAssetsPlugin({})
        ],

        // 分割代码块
        splitChunks: {
            /**
             * initial 入口chunk，对于异步导入的文件不处理
             * async 异步chunk，只对异步导入的文件处理
             * all 全部chunk
             */
            chunks: 'all',
            // 缓存分组
             cacheGroups: {
                // 第三方模块
                vendor: {
                    name: 'vendor', // chunk名称
                    priority: 1, // 权限更高，优先抽离
                    test: /node_modules/,
                    minSize: 0, // 大小限制
                    minChunks: 1 // 最少复用过几次
                },
                 // 公共的模块
                 common: {
                     name: 'common', // chunk名称
                     priority: 0, // 优先级
                     minSize: 0, // 大小限制
                     minChunks: 2 // 最少复用过几次
                 }
             }
        }
    }
});
