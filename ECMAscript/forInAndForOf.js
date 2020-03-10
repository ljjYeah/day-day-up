const obj = {
    name: 'ljj',
    age: 20
};

const arr = ['A', 'B', 'C'];

// for(let key in obj) {
//     console.log(key);
// }
//
// for(let index in arr) {
//     console.log(index);
//     console.log(typeof index);
// }

// for(let key of obj) {
//     console.log(key);
// }

// for(let value of arr) {
//     console.log(value);
//     if(value === 'A') {
//         continue;
//     }
//     console.log(value + '21211');
// }

// var triangle = {a: 1, b: 2, c: 3};
// function ColoredTriangle() {
//     this.color = 'red';
// }
// ColoredTriangle.prototype = triangle;
// var obj = new ColoredTriangle();
// for (var prop of obj) {
//     console.log(`obj.${prop} = ${obj[prop]}`);
// }



Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
    console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

// for (let i in iterable) {
//     if (iterable.hasOwnProperty(i)) {
//         console.log(i); // logs 0, 1, 2, "foo"
//     }
// }
//
// for (let i of iterable) {
//     console.log(i); // logs 3, 5, 7
// }