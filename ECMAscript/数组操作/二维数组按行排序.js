function sort(arr) {
    return arr.map(item => item.sort((a, b) => a-b))
}

const arr = [[1, 34], [456, 2, 3, 44, 234], [4567, 1, 4, 5, 6], [34, 78, 23, 1]];
console.log(sort(arr));
//[
//   [ 1, 34 ],
//   [ 2, 3, 44, 234, 456 ],
//   [ 1, 4, 5, 6, 4567 ],
//   [ 1, 23, 34, 78 ]
// ]