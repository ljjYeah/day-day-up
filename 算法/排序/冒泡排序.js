// 1.依次比较相邻的两个数，如果第一个比第二个小，不变。如果第一个比第二个大，调换顺序。一轮下来，最后一个是最大的数
// 2.对除了最后一个之外的数重复第一步，直到只剩一个数
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