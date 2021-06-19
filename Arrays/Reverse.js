/*
    Given an array (or string), the task is to reverse the array/string.
*/

const reverse = (arr) => {
    let i = 0;
    let j = arr.length - 1;
    let temp;
    if (arr.length < 2) {
        return arr;
    }
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([]));
console.log(reverse([1]));
console.log(reverse([2, 1]));