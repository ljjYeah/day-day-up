Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    let _this = this;
    let args = [...arguments].slice(1);
    return function F() {
        if (this instanceof F) {
            return _this.apply(this, args.concat([...arguments]))
        }
        return _this.apply(context, args.concat([...arguments]))
    }
};

const obj1 = {
    name:'joy',
    age:10,
    setInfo(address, age) {
        this.address = address;
        this.age = age;
        console.log(this);
        console.log(this.name, this.address, this.age);
    }
};

const obj2 = {
    name:'sam'
};

// { name: 'sam', address: 'ljj', age: 20 }
// sam ljj 20
const setInfo = obj1.setInfo.bind(obj2, 'ljj',20);
setInfo();

