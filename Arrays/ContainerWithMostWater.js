/*
Difficulty: Medium

Q: Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

Example 3:

Input: height = [4,3,2,1,4]
Output: 16
*/

//-------Solution ---- //

/*
 * @param {number[]} height
 * @return {number}
 */

//utility functions
const min = (a, b) => a < b ? a : b;
const max = (a, b) => a > b ? a : b;

/*
    Solution 1.
    Brute Force
*/

const maxAreaBF = (height) => {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      area = min(height[i], height[j]) * (j - i);
      maxArea = max(area, maxArea);
    }
  }
  return maxArea;
};


/*
    Solution 1.
    Efficient
    Two Pointer method
*/

const maxAreaEfficient = (height) => {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = min(height[left], height[right]) * (right - left);
    maxArea = max(area, maxArea);
    if (left < right) {
      left++
    } else {
      right--
    }
  }
  return maxArea
}

//test code
console.log(maxAreaEfficient([1, 1]));
console.log(maxAreaEfficient([4, 3, 2, 1, 4]))
console.log(maxAreaEfficient([1, 8, 6, 2, 5, 4, 8, 3, 7]))