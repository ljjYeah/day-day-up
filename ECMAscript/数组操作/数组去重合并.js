function combine() {
    const arr = [].concat.apply([], arguments);
    return Array.from(new Set(arr))
}

const a = [1, 2, 3];
const b = [2, 3, 4];
const c = [3, 2, 4];

console.log(combine(a,b,c)); // [ 1, 2, 3, 4 ]