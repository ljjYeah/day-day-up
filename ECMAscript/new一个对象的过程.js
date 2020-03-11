// function Test(attr1, attr2) {
//     this.attr1 = attr1;
//     this.attr2 = attr2;
//     // return this; // 默认有这一行
//     // return {test: 123}; // 因为return的是对象，所以返回此对象
//     // return 1; // 因为return的不是对象，所以还是返回第一步创建的那个新对象
// }
//
// var obj = new Test(1,2);
// console.log(obj);

// 延伸，实现私有
// function Cls(){
//     this.a = 100;
//     return {
//         getValue:() => this.a
//     }
// }
// var o = new Cls();
// console.log(o.getValue());//100
// //a在外面永远无法访问到


var o = {};
// var o = function(){}
console.log(Object.getOwnPropertyNames(o));