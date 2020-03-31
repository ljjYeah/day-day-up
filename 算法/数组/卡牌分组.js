// 914. 卡牌分组
// 给定一副牌，每张牌上都写着一个整数。
// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。
//
// 示例 1：
// 输入：[1,2,3,4,4,3,2,1]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
//
// 示例 2：
// 输入：[1,1,1,2,2,2,3,3]
// 输出：false
// 解释：没有满足要求的分组。
//
// 示例 3：
// 输入：[1]
// 输出：false
// 解释：没有满足要求的分组。
//
// 示例 4：
// 输入：[1,1]
// 输出：true
// 解释：可行的分组是 [1,1]
//
// 示例 5：
// 输入：[1,1,2,2,2,2]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[2,2]
//
// 提示：
// 1 <= deck.length <= 10000
// 0 <= deck[i] < 10000

function hasGroupsSizeX(arr) {
    if (arr.length < 2) return false;
    // 把输入的数组转换成key为值，value为出现次数的对象
    const displayInfo = {};
    arr.forEach(item => {
        if (displayInfo[item]) {
            displayInfo[item] += 1;
        } else {
            displayInfo[item] = 1;
        }
    });
    // 计算出现次数的最小值
    const displayNum = Object.values(displayInfo);
    const K = Math.min(...displayNum);
    // 出现次数与最小值取余，如果为0则满足要求，否则不满足
    let result = true;
    for (let i of displayNum) {
        if (i % K !== 0) {
            result = false;
            break;
        }
    }
    return result;
}

// const test = hasGroupsSizeX([1,2,3,4,4,3,2,1]);
// const test = hasGroupsSizeX([1,1,1,2,2,2,3,3]);
// const test = hasGroupsSizeX([1]);
// const test = hasGroupsSizeX([1,1]);
const test = hasGroupsSizeX([1,1,2,2,2,2]);
console.log(test);
