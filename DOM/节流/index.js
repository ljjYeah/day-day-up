// 节流的原理：
// 如果你持续触发事件，每隔一段时间，只执行一次事件
// 实现节流的两种方式 1.使用时间戳 2.设置定时器

var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(this);
    console.log(e);
    container.innerHTML = count++;
}

// 使用时间戳
function throttle(func, wait) {
    var previous = 0;
    return function () {
        var now = new Date();
        if (now - previous > wait) {
            func.apply(this, arguments);
            previous = now;
        }
    }
}

container.onmousemove = throttle(getUserAction, 2000);

// 使用定时器
// function throttle(func, wait) {
//     var timeout;
//     return function () {
//         var context = this;
//         var args = arguments;
//         if(!timeout) {
//             timeout = setTimeout(function () {
//                 timeout = null;
//                 func.apply(context, args)
//             }, wait)
//         }
//     }
// }
//
// container.onmousemove = throttle(getUserAction, 2000);

// 时间戳和定时器的区别：
// 1.时间戳 事件会立刻执行，定时器 事件会在n秒后第一次执行
// 2.时间戳 事件触发后没有办法再执行事件，定时器 事件停止触发后依然会再执行一次事件
