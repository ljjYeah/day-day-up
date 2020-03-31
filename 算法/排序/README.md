## 冒泡排序

![avatar](https://liujuanjuan-resource.oss-cn-beijing.aliyuncs.com/day-day-up/bubble.gif)

- 依次比较相邻的两个数，如果第一个比第二个小，不变。如果第一个比第二个大，调换顺序。一轮下来，最后一个是最大的数
- 对除了最后一个之外的数重复第一步，直到只剩一个数

```javascript
function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            let temp = arr[j];
            if (arr[j + 1] < temp) {
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1, 3, 6, 9, 2, 34, 7]));
```

### 选择排序

![avatar](https://liujuanjuan-resource.oss-cn-beijing.aliyuncs.com/day-day-up/selection.gif)

- 找出最小的数，和第一个交换位置
- 在剩下的数中，找出最二小的数，放在第二个
- 依次类推，排出顺序

```javascript
function selectionSort(arr) {
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let minIndex = i;
        for (let j = i; j < arrLength; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([1, 3, 6, 9, 2, 34, 7]));
```