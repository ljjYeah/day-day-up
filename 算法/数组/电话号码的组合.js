// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
//
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
//
// 示例:
//
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
const map = ['', 1, 'abc', 'def', 'ghi', 'jki', 'mno', 'pqrs', 'tuv', 'wxyz'];

// 方法1：使用reduce
// function letterCombinations(str) {
//     return str.split('').reduce((arc, currentItem) => combine(arc, map[currentItem].split('')), []);
// }
//
// function combine(arr1, arr2) {
//     if (arr1.length < 1) {
//         return arr2;
//     } else {
//         let result = [];
//         arr1.forEach(arr1Item => {
//             arr2.forEach(arr2Item => {
//                 result.push(arr1Item + arr2Item)
//             })
//         });
//         return result;
//     }
// }

// 方法2：使用递归
function letterCombinations(str) {
    // '23' => ['2', '3']
    let num = str.split('');
    // ['2', '3'] => ['abc', 'def']
    let code = num.map(item => map[item]);
    let combine = (arr) => {
        let temp = [];
        for (let i = 0, iLength = arr[0].length; i < iLength; i++) {
            for (let j = 0, jLength = arr[1].length; j < jLength; j++) {
                temp.push(arr[0][i] + arr[1][j])
            }
        }
        // 将数组的前两项使用这两项组合后的结果替换
        arr.splice(0, 2, temp);
        if (arr.length <= 1) {
            return temp;
        } else {
            combine(arr)
        }
        return arr[0]
    };
    return combine(code);
}

const test = letterCombinations('24');
console.log(test);
