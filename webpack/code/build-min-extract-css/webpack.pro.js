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
        ]
    }
});
