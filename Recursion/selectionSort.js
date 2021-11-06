/*
Selection sort implementation
*/
function indexOfMinValue(arr, start, end){
    let min = Infinity;
    let minIndex;
    for(let i=start; i<end; i++){
        if(arr[i]<min){
            min = arr[i];
            minIndex=i;
        }
    }
    return minIndex;
}
function selectionSort(arr, start, end){
    if(start>=end){
        return;
    }
    let temp;
    let min_index;
    min_index = indexOfMinValue(arr, start, end);

    temp = arr[min_index];
    arr[min_index] = arr[start];
    arr[start] = temp;
    
    selectionSort(arr, start+1, end)

}
let arr = [2, 4, 5, 7, 6];

console.log(selectionSort(arr, 0, arr.length));
console.log(arr);