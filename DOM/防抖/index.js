//防抖的原理就是：
// 你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
// 如果你在一个事件触发的 n 秒内又触发了这个事件，
// 那我就以新的事件的时间为准，n 秒后才执行，
// 总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!

var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(this);
    console.log(e);
    container.innerHTML = count++;
}

// ------------------------------------------------------

// container.onmousemove = getUserAction;

// ------------------------------------------------------
// 第一版
// 在 getUserAction 函数中 console.log(this)，
// 在不使用 debounce 函数的时候，this 的值为：
// <div id="container"></div>
// 但是如果使用我们的 debounce 函数，this 就会指向 Window 对象！
// function debounce(func, wait) {
//     var timeout;
//     return function () {
//         clearTimeout(timeout);
//         timeout = setTimeout(func, wait);
//     }
// }
// container.onmousemove = debounce(getUserAction, 1000);

// ------------------------------------------------------
// 第二版
// this指向正确
// JavaScript 在事件处理函数中会提供事件对象 event
// 如果我们不使用 debouce 函数，这里会打印 MouseEvent 对象
// 使用后打印的是undefined
// function debounce(func, wait) {
//     var timeout;
//     return function () {
//         var context = this;
//         clearTimeout(timeout);
//         timeout = setTimeout(function () {
//             func.apply(context);
//         }, wait);
//     }
// }
//
// container.onmousemove = debounce(getUserAction, 1000);

// ------------------------------------------------------
// 第三版
function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, wait);
    }
}

container.onmousemove = debounce(getUserAction, 1000);