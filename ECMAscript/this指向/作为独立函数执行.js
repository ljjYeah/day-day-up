"use strict";

var arr=[1];
arr.forEach(function () {
    console.log(this); // 严格模式下是undefined，非严格模式是window
});

// setTimeout(function() {
//     console.log(this); // 严格模式和非严格模式都是指向window
// });
//
// function printThis() {
//     return this
// }
//
// console.log(printThis()); // 严格模式下是undefined，非严格模式是window

