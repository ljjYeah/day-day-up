### [LeetCode 17. 电话号码的组合-公式运算](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number)
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。<br/>
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

**示例:**

>输入："23" <br/>
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

**说明:** <br/>
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

```javascript
// 方法1：使用reduce
function letterCombinations(str) {
    return str.split('').reduce((arc, currentItem) => combine(arc, map[currentItem].split('')), []);
}

function combine(arr1, arr2) {
    if (arr1.length < 1) {
        return arr2;
    } else {
        let result = [];
        arr1.forEach(arr1Item => {
            arr2.forEach(arr2Item => {
                result.push(arr1Item + arr2Item)
            })
        });
        return result;
    }
}
letterCombinations('24');
```

```javascript
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
letterCombinations('24');
```

### [LeetCode 914. 卡牌分组-归类运算](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards)
给定一副牌，每张牌上都写着一个整数。<br/>
此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

- 每组都有 X 张牌。
- 组内所有的牌上都写着相同的整数。

仅当你可选的 X >= 2 时返回 true。

**示例 1：**
> 输入：[1,2,3,4,4,3,2,1] <br/>
输出：true <br/>
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

**示例 2：**
>输入：[1,1,1,2,2,2,3,3] <br/>
输出：false <br/>
解释：没有满足要求的分组。

**示例 3：**
>输入：[1] <br/>
输出：false <br/>
解释：没有满足要求的分组。

**示例 4：**
>输入：[1,1] <br/>
输出：true <br/>
解释：可行的分组是 [1,1]

**示例 5：**
>输入：[1,1,2,2,2,2] <br/>
输出：true <br/>
解释：可行的分组是 [1,1]，[2,2]，[2,2]

**提示：**

> 1 <= deck.length <= 10000 <br/>
0 <= deck[i] < 10000

```javascript
function gcd(a, b) {
    if (b === 0) {
        return a
    } else {
        return gcd(b, a % b)
    }
}

function hasGroupsSizeX(deck) {
    if (deck.length < 2) return false;
    // 把输入的数组转换成key为值，value为出现次数的对象
    const displayInfo = {};
    deck.forEach(item => {
        displayInfo[item] = displayInfo[item] ? displayInfo[item] + 1 : 1;
    });
    // 计算出现次数的最大公约数
    const displayNum = Object.values(displayInfo);
    let g = displayNum[0];
    displayNum.forEach(item => {
        g = gcd(g, item)
    });
    return g >= 2;
}

hasGroupsSizeX([1,2,3,4,4,3,2,1]);
```

### 种花问题-筛选运算
### 格雷编码-二进制运算