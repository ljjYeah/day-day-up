// 1.找出最小的数，和第一个交换位置
// 2.在剩下的数中，找出最二小的数，放在第二个
// 3.依次类推，排出顺序
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