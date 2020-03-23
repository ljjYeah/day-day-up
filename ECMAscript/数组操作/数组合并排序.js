function combine() {
    const arr = [].concat.apply([], arguments);
    return sort(arr,'desc');
}

function sort(arr, type = 'asce') {
    if (type === 'asce') {
        return arr.sort((a, b) => a - b);
    }
    return arr.sort((a, b) => b - a);
}

const a = [1, 2, 3];
const b = [2, 3, 4];
const c = [3, 2, 4];

console.log(combine(a,b,c)); //[4, 4, 3, 3, 3,2, 2, 2, 1]