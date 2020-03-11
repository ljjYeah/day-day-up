// function Dog() {
//     this.name = 'Puppy'
// }
// const dog = Dog();
// console.log(dog.name); // 报错


// function Dog() {
//     this.name = 'Puppy'
// }
// const dog = new Dog();
// console.log(dog.name); // Puppy

const puppet = {
    rules: false
};
function Emperor() {
    this.rules = true;
    return puppet;
}
const emperor = new Emperor();
console.log(emperor.rules); // false