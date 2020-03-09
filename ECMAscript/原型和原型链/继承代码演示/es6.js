class SuperType {
    constructor(name) {
        this.name = name
    }
    innerMethods() {
        console.log('inner');
    }
}
SuperType.prototype.outerMethods = () => {
    console.log('out');
};

class SubType extends SuperType{
    constructor(name) {
        super(name);
    }
}

const obj1 = new SubType('ljj');
console.log(obj1.name); // ljj
console.log(obj1.__proto__.__proto__); // SuperType