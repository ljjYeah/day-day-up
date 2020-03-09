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

function createAnotherObject(o) {
    // var clone = object(o);
    var clone = Object.create(o);
    clone.sayHello = function () {
        console.log('hi');
    };
    return clone;
}

var person1 = createAnotherObject(person);
var person2 = createAnotherObject(person);
person1.sayHello(); // hi
person2.sayHello(); // hi
