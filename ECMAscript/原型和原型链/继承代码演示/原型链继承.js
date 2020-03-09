function SuperType() {
    this.superAttr = 'super';
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.superMethod = function () {
    console.log('super method');
};

function SubType() {
    this.subAttr = 'sub'
}

SubType.prototype = new SuperType();
const sub1 = new SubType();
const sub2 = new SubType();
sub1.colors.push('pink');
console.log(sub1.colors);
console.log(sub2.colors);