/*
Works on list of sorted arrays
-1 0 1 2 3 4 7 9 10 20

*/

function binarySearch(arr, left, right, value){
    let mid = Math.floor((left+right)/2);
    
    if(right<left){
        return -1;
    }
    if(arr[mid] == value){
        return true;
    }else if(arr[mid]>value){
        right = mid-1;
        return binarySearch(arr, left, right, value)
    }else{
        left = mid+1;
        return binarySearch(arr, left, right, value)
    }

}
const arr = [-1, 0, 1, 2, 3, 4, 7, 9, 10, 20];

console.log(binarySearch(arr, 0, arr.length, 10))
