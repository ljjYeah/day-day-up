// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
//
//
// async function async2() {
//     new Promise(function (resolve) {
//         console.log('promise3');
//         resolve()
//     }).then(function () {
//         console.log('promise4');
//     });
// }
//
// console.log('script start');
//
// setTimeout(function () {
//     console.log('setTimeout');
// }, 0);
//
// async1();
//
// new Promise(function (resolve) {
//     console.log('promise1');
//     resolve()
// }).then(function () {
//     console.log('promise2');
// });
//
// console.log('script end');

//script start
// async1 start
//async2
//promise1
//script end
//async1 end
//promise2
//setTimeout


console.log(1);
setTimeout(function () {
    new Promise(function (resolve, reject) {
        console.log(2);
        resolve()
    })
        .then(() => {
            console.log(3)
        })
}, 0);

setTimeout(function () {
    console.log(4)
}, 0);

// chrome中运行：1 2 3 4
// Node中运行： 1 2 4 3