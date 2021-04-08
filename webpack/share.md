### 背景
- 大家对webpack的概念不是很了解，对其配置不是很熟悉，对其能做哪些事情不是很清楚。
- 本次分享以概念为主

### 简单分享下webpack主要配置
- mode
    - 用来指定当前的构建环境是：production、development还是none
- entry
    - 入口文件
- output
    - 输出文件
- module
    - loaders
- plugins
    - plugins

### 简单分享下几个概念
- webpack、webpack-cli、webpack-dev-server
- .babelrc
        ```text
            {
              "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              "plugins": [...]
            }
          ```
    - presets: 多个plugins的集合
    - plugins：一个plugin对应一个功能
- module、chunk、bundle
- hash、chunkhash、contenthash
    - hash:和整个项目的构建相关，只要项目文件有修改，整个项目构建的hash值就会更改,一般设置图片文件
            ```javascript
              module.exports = {
                module: {
                  rules: [
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
            }
            ```
    - chunkhash：和webpack打包的chunk有关，不同entry会生成不同的chunkhash值，一般设置js文件
            ```javascript
            module.exports = {
              output: {
                path: path.join(__dirname, 'dist'),
                filename: '[name].[chunkhash:8].js'
              },
            }
            ```
    - contenthash:根据内容来定义hash，文件内容不变，则contenthash不变，一般设置css文件
            ```javascript
            const MiniCssExtractPlugin = require('mini-css-extract-plugin');
            
            module.exports = {
              mode: 'production',
              module: {
                rules: [
                  {
                    test: /.css$/,
                    // 这里的style-loader被替换成了MiniCssExtractPlugin.loader，
                    // 是因为style-loader会把生成的css插入到html的头部，而MiniCssExtractPlugin会把css提取成css文件然后插入，功能冲突
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                  },
                  {
                    test: /.less$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
                  }
                ]
              },
              plugins: [
                new MiniCssExtractPlugin({
                  filename: '[name].[contenthash:8].css'
                })
              ]
            }
            ```
- loaders从右往左执行

### 简单聊一聊
- 现有构建最直观的问题
    - 开发过程构建一次时间要很久
    - 构建出来的包体积很大
    - 扩充配置需要各个项目都改动，在配置过程中，会产生差异
- 改造前、改造后对比

- 最后，请大声的说出你的想法
    - epack概念
    - webpack5升级
    - 缩短构建速度
    - 减小文件体积



