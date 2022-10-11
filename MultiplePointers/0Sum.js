/*
Given sorted integer arrays
return first pair that sums to 0
*/

const sumZero = (array) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right]
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
  return [];
}
console.log(sumZero([-1,0,2]))