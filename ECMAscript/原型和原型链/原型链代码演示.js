function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.speak = function () {
    console.log('speak');
};
const ljj = new Person('ljj', 27);
ljj.say = function() {
    console.log('say');
};
console.log(ljj.constructor === Person); // true
console.log(ljj.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true

const isEqual = ljj instanceof Person;
const isEqual2 = ljj instanceof Object;
const isEqual3 = Person instanceof Object;
console.log(isEqual); // true
console.log(isEqual2); // true
console.log(isEqual3); // true

const isEqual4 = ljj.hasOwnProperty('speak');
const isEqual5 = ljj.hasOwnProperty('say');
console.log(isEqual4); //false
console.log(isEqual5); //true

console.log(Object.getPrototypeOf(ljj) === ljj.__proto__); // true
console.log(Object.getPrototypeOf(ljj) === Person.prototype); // true
Object.setPrototypeOf(ljj, function () {
    console.log('hello');
});

console.log(Object.getPrototypeOf(ljj)); // [Function]
console.log(Object.getPrototypeOf(ljj) === ljj.__proto__); // true
console.log(Object.getPrototypeOf(ljj) === Person.prototype); // false