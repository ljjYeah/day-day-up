# 我们一起day day up

### 目录

#### ECMAscript
- 变量类型
- 原型和原型链
- 作用域，闭包和内存
- 事件循环

#### 框架
- vue
    - 基本使用
    - 组件
    - 高级特性
    - 周边工具（vuex，vue-router）
    - 原理
    
- react
    - 基本使用
    - 高级特性
    - 原理
    - 周边工具（redux，react-redux，react-router）
    
- vue和react对比


#### 性能优化

- 加载
  - speed index： lighthouse里面查看，如果大于4s，表示要优化了
  - TTFB：请求发出去到请求回来的时间
  - 页面加载时间：DOMContentLoaded && load
  - 首次渲染
  
- 响应
  - 交互动作的反馈时间
  - 帧率FPS：最起码1s中60帧以上不会卡，command+shift+p在performance里面查看 frame
  - 异步请求的完成时间： 1s回来，如果不行，就压缩并加loading样式
  
- 测量模型
  - RAIL
    - response响应：网站对用户的响应
    - animation动画
    - idle空闲：让浏览器有足够的空闲时间，performance里面查看
    - load加载
  - RAIL评估标准
    - 响应：处理事件应在50ms以内完成
    - 动画：每10ms产生一帧
    - 空闲：尽可能增加空闲时间 
    - 加载：在5s内完成内容加载并可以交互
  
- 性能测量工具
  - chrome devTools开发调试、性能评测
    - performance esc
  - lighthouse网站整体质量评估
    - npm install lighthouse -g
    - lighthouse https://www.baidu.com
    - command+shift+p在performance里面过滤加载文件 block
  - webPageTest多测试地点、全面性能报告
    - 本地部署
    - 1.docker pull webpagetest/server
    - 2.docker pull webpagetest/agent
    - 3.docker run -d -p 4000:80 webpagetest/server
    - 4.docker run -d -p 4001:80 --network="host" -e "SERVER_URL=http://localhost:4000/work/" -e "LOCATION=Test" webpagetest/agent
    - 5.mkdir wpt-mac-server
    - 6.cd wpt-mac-server
    - 7.vim Dockerfile
    - 8.vim location.ini
    - 9.........
  
- 性能测量api
  - 关键时间节点（Navigation Timing，Resource Timing）
    - 检测长任务
  - 网络状态（Network APIs）
  - 客户端服务端协商（HTTP Client Hints） & 网页显示状态（UI APIs）


#### webpack
- 基本使用
- 高级特性
- 性能优化
- babel

#### 算法
- 字符串
- 数组
- 正则
- 排序
- 递归

#### BOM
- 正在整理中

#### DOM
- 正在整理中

#### css
- 正在整理中

#### html
- 正在整理中

#### 设计模式
- 正在整理中

