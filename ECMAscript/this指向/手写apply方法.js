Function.prototype.myApply = function (context) {
    if (context == null) {
        context = window
    }
    context.fn = this;
    let args = arguments[1];
    let result;
    if (args) {
        result = context.fn(...args);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
};

// const obj1 = {
//     name:'joy',
//     age:10,
//     setInfo(address, age) {
//         this.address = address;
//         this.age = age;
//         console.log(this);
//         console.log(this.name, this.address, this.age);
//     }
// };
//
// const obj2 = {
//     name:'sam'
// };
//
// obj1.setInfo.myApply(obj2,['ljj',20]);
