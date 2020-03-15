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
obj1.setInfo.call(obj2,'ljj',20);

// { name: 'sam', address: 'ljj', age: 20 }
// sam ljj 20
obj1.setInfo.apply(obj2,['ljj',20]);

// { name: 'sam', address: 'ljj', age: 20 }
// sam ljj 20
const setInfo = obj1.setInfo.bind(obj2, 'ljj',20);
setInfo();


const arr = [1,2,3,8,3,54,32];
const max = Math.max.apply(null,arr);
const min = Math.min.apply(null,arr);
console.log(max); // 54
console.log(min); // 1
