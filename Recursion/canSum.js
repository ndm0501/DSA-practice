/*
    Given a target sum and an array of numbers
    Can numbers in the array sum upto targetSum
*/

function canSum(targetSum, arr, memo={}){
    if(targetSum in memo){
        return memo[targetSum];
    }
    if(targetSum == 0){
        return true;
    }
    if(targetSum < 0){
        return false;
    }
    for(let num of arr){
        let val = canSum(targetSum-num, arr);
        if(val){
            memo[targetSum] = val;
            return val;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(7, [5, 3, 4, 7]));