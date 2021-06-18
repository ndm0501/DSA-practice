/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
    such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []

*/

//Incomplete
// const threeSum = (nums) => {
//     const nums_sort = nums.sort((a, b) => a - b);
//     const result = [];
//     if (nums.length < 3) return result;

//     for (let i = 0; i < nums_sort.length - 2; i++) {
//         let start = i + 1;
//         let end = nums_sort.length - 1;
//         while (start < end) {
//             let sum = nums_sort[i] + nums_sort[start] + nums_sort[end];
//             if (sum == 0) {
//                 result.push([nums_sort[i], nums_sort[start], nums_sort[end]]);
//                 break;
//             } else if (sum > 0) {
//                 end--;
//             } else if (sum < 0) {
//                 start++;
//             }
//         }
//     }
//     return result;
// }
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));