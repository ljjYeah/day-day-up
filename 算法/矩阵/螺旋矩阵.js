// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
//
// 示例 1:
//
// 输入:
//     [
//         [ 1, 2, 3 ],
//         [ 4, 5, 6 ],
//         [ 7, 8, 9 ]
//     ]
// 输出: [1,2,3,6,9,8,7,4,5]
//
// 示例 2:
//
// 输入:
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9,10,11,12]
//     ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
function matrix(arr) {
    let map = (arr, result = []) => {
        for (let i = 0; i < arr.length; i++) {
            if (i === 0) {
                result = result.concat(arr[i])
            } else if (i === arr.length - 1) {
                result = result.concat(arr[i].reverse())
            } else {
                result.push(arr[i].pop())
            }
        }
        arr.shift();
        arr.pop();
        for (let j = arr.length - 1; j >= 0; j--) {
            result.push(arr[j].shift())
        }
        if (arr.length) {
            return map(arr, result)
        } else {
            return result
        }
    };
    return map(arr, [])
}

const result1 = matrix([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
]);
const result2 = matrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
]);
console.log(result1);
console.log(result2);