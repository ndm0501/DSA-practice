/*
In an array of sorted integers, find the index of last occurrence of target element
EX: arr= [2, 4, 10, 10, 10, 12, 16, 20 ]
target= 10
Expected result: 4
*/
function lastOccurrence(arr, target){
    let start = 0;
    let end = arr.length-1;
    let result;
    while(start<=end){
        let mid = parseInt(start + (end-start)/2);
        if(arr[mid]==target){
            result =  mid;
            start = mid+1;
        }else if(arr[mid]>target){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return result;
}

let arr= [2, 4, 10, 10, 10, 12, 16, 20 ]
let target= 10;

console.log(lastOccurrence(arr, target))