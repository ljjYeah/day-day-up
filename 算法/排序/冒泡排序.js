function sort(arr) {
    for(let i = arr.length-1;i>0;i--){
        for(let j=0;j<=i;j++){
            let temp = arr[j];
            if (temp > arr[j+1]) {
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
console.log(sort([1,3,6,9,2,34,7]));