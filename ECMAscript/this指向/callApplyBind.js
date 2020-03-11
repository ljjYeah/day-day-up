const obj1 = {
    name:'joy',
    getName(){
        console.log(this); //obj
        console.log(this.name); //joy
    }
};

const obj2 = {
    name:'sam'
};

obj1.getName.call(obj2); //obj2 sam
obj1.getName.apply(obj2); //obj2 sam
const fn = obj1.getName.bind(obj2);
fn();//obj2 sam