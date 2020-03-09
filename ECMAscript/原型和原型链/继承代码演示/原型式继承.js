// 这个函数的写法可以使用Object.create()代替
// function object(o) {
//     function F() {}
//     F.prototype = o;
//     return new F();
// }

var person = {
    name: 'ljj',
    friends:['A', 'B']
};

// var person1 = object(person);
var person1 = Object.create(person);
person1.name = 'wgl';
person1.friends.push('C');

// var person2 = object(person);
var person2 = Object.create(person);
person2.name = 'wzq';
person2.friends.push('D');
console.log(person.name); // ljj
console.log(person1.name); // wgl
console.log(person2.name); // wzq

console.log(person.friends); // [ 'A', 'B', 'C', 'D' ]