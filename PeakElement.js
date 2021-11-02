/*An element is called a peak element if its value is not smaller than the value of its adjacent elements(if they exists).
Given an array arr[] of size N, find the index of any one of its peak elements.
Note: The generated output will always be 1 if the index that you return is correct. Otherwise output will be 0. 


Example 1:

Input:
N = 3
arr[] = {1,2,3}
Output: 1
Explanation: index 2 is 3.
It is the peak element as it is 
greater than its neighbour 2.
Example 2:

Input:
N = 2
arr[] = {3,4}
Output: 1
Explanation: 4 (at index 1) is the 
peak element as it is greater than 
its only neighbour element 3.
*/
function peakElement(arr, n){
    let peakValueIndex = 0;
    for(let i=0; i<n; i++){
        if(arr[i]<arr[i+1]){
            peakValueIndex = i+1;
        }
    }
    return peakValueIndex
}

console.log(peakElement([3,4], 2));