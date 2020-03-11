// function printThis() {
//     return this;
// }
//
// const obj = {printThis};
// console.log(obj.printThis()); // obj


// const obj1 = {
//     name:'joy',
//     getName(){
//         console.log(this); //obj1
//         console.log(this.name); //joy
//     }
// };
//
// const obj2 = {
//     name:'sam',
//     friend:obj1
// };
//
// const obj3 = {
//     name: 'jam',
//     friend:obj2
// };
//
// obj3.friend.friend.getName();

const obj1 = {
    name:'joy',
    getName(){
        console.log(this); // obj2
        console.log(this.name); // sam
    }
};

const obj2 = {
    name:'sam',
    getName:obj1.getName
};

obj2.getName();