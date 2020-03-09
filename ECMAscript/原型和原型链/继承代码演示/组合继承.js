function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.superMethod = function () {
    console.log('super method');
};

function SubType() {
    SuperType.call(this, 'ljj'); // 第二次调用SuperType()
}

SubType.prototype = new SuperType(); // 第一次调用SuperType()
// 如果不把constructor的值修改，会指向超类型构造函数
SubType.prototype.constructor = SubType;

const sub1 = new SubType();
const sub2 = new SubType();
sub1.colors.push('pink');
console.log(sub1.colors); // [ 'red', 'blue', 'green', 'pink' ]
console.log(sub2.colors); // [ 'red', 'blue', 'green' ]
console.log(sub1.name); // ljj
console.log(sub1 instanceof SuperType); // true
sub1.superMethod(); // super method

console.log(sub1.constructor); // [Function: SubType]

