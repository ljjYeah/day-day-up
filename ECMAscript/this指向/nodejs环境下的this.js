// var name = 'bigBar';
// module.exports.name = '123'
// // this.name = '454'
// var me = {
//     name: 'smoothwater',
//     hello: () => {
//         console.log(this);
//         console.log(this.name)
//     }
// };
// me.hello();
// console.log(this === module.exports);

// 全局中的this
// console.log(this);// {}
// this.num = 10;
// console.log(this.num); // 10
// console.log(global.num); // undefined
// console.log(this === module.exports);// true
 
//函数中的this
// function fn() {
//     this.num = 10;
// }
//
// fn();
// console.log(this); //{}
// console.log(this.num);//undefined
// console.log(global.num);//10

// function fn(){
//     function fn2(){
//         this.age = 18;
//     }
//     fn2();
//     console.log(this); //global
//     console.log(this.age); //18
//     console.log(global.age); //18
// }
// fn();

//构造函数中的this
function Fn() {
    this.num=10
}
const fn = new Fn();
console.log(fn.num); // 10
console.log(global.num); // undefined