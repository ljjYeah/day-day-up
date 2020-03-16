// flat默认提取嵌套数组的结构深度为1
const arr = [1, , 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6, [ 7, 8, [9, 10] ] ] ]

//使用 Infinity，可展开任意深度的嵌套数组
console.log(arr.flat(Infinity)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

// 替代flat方案
//1.使用reduce与concat，只能展开一层数组
console.log(arr.reduce((ace, val) => ace.concat(val), [])); // [ 1, 2, 3, 4, [ 5, 6, [ 7, 8, [9, 10] ] ] ]
// 以下方法不会过滤空项
console.log([].concat(...arr)); // [ 1, undefined, 2, 3, 4, [ 5, 6, [ 7, 8, [9, 10] ] ] ]

// 2.使用reduce+concat+isArray+recursivity
function flatten(arr, deep) {
    return deep > 0 ?
        arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val, deep - 1) : val), [])
        : arr.slice() // 此处注意，不能直接返回arr，需要使用slice，否则引用flatten的变量对数组进行操作，会影响原数组arr
}
console.log(flatten(arr, 2));