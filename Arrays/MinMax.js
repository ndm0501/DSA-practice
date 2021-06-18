/*
Maximum and minimum of an array using minimum number of comparisons
*/

const getMinMax = (nums) => {
    let min = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        } else if (nums[i] > max) {
            max = nums[i]
        }
    }
    return [min, max];
}

console.log(getMinMax([8, -3, -1, 0, 5, -9, 20]))
