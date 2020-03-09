function SuperType(name) {
    this.superAttr = 'super';
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
    this.superNotPropertyMethod = function () {
        console.log('super not property method');
    };
}

SuperType.prototype.superMethod = function () {
    console.log('super method');
};

function SubType() {
    SuperType.call(this, 'ljj');
    this.subAttr = 'sub';
}

const sub1 = new SubType();
const sub2 = new SubType();
sub1.colors.push('pink');
console.log(sub1.colors); // [ 'red', 'blue', 'green', 'pink' ]
console.log(sub2.colors); // [ 'red', 'blue', 'green' ]
console.log(sub1.name); // ljj
console.log(sub1 instanceof SuperType); // false
sub1.superNotPropertyMethod(); // super not property method
sub1.superMethod(); // 报错