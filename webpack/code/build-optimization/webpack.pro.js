const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { smart } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css
const TerserPlugin = require('terser-webpack-plugin'); // 压缩
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css
const HappyPack = require('happypack');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');


const webpackCommonConf = require('./webpack.common');
const { srcPath, distPath } = require('./path');

module.exports = smart(webpackCommonConf, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash:8].js',
        path: distPath,
        publicPath: 'http://cdn.abc.com/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                //  把对.js文件的处理转交给id为babel的Happypack实例
                use: ['happypack/loader?id=babel'],
                include: srcPath,
                // exclude: /node_modules/
            },
            {
                test: /.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 5*1024,
                        outputPath: '/img1/',
                        publicPath: 'http://cdn.abc.com/'
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
        }),
        // 忽略moment下的/locale目录
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),
        // happyPack开启多进程打包
        new HappyPack({
            // 用唯一的标志符id来代表当前的HappyPack是用来处理一类特定的文件
            id: 'babel',
            // 如何处理.js文件，用法和loader配置一样
            loaders: ['babel-loader?cacheDirectory']
        }),
        // 使用ParallelUglifyPlugin并行压缩输出的js代码
        new ParallelUglifyPlugin({
            // 传递给uglify的参数
            // （还是使用uglify压缩，只不过帮助开启了多进程）
            uglifyJS: {
                output: {
                    beautify: false, // 最紧凑的输出
                    comments: false, // 删除所有的注释
                },
                compress: {
                    // 删除所有console语句，可以兼容ie浏览器
                    drop_console: true,
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    // 提取出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true
                }
            }
        })
    ],
    optimization: {
        // 压缩css
        minimizer: [
            new TerserPlugin({}),
            new OptimizeCssAssetsPlugin({})
        ],

        // 分割代码块
        // splitChunks: {
        //     /**
        //      * initial 入口chunk，对于异步导入的文件不处理
        //      * async 异步chunk，只对异步导入的文件处理
        //      * all 全部chunk
        //      */
        //     chunks: 'all',
        //     // 缓存分组
        //      cacheGroups: {
        //         // 第三方模块
        //         vendor: {
        //             name: 'vendor', // chunk名称
        //             priority: 1, // 权限更高，优先抽离
        //             test: /node_modules/,
        //             minSize: 0, // 大小限制
        //             minChunks: 1 // 最少复用过几次
        //         },
        //          // 公共的模块
        //          common: {
        //              name: 'common', // chunk名称
        //              priority: 0, // 优先级
        //              minSize: 0, // 大小限制
        //              minChunks: 2 // 最少复用过几次
        //          }
        //      }
        // }
    }
});
