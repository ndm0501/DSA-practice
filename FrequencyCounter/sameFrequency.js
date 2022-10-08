/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

 */


function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.
    const str1 = num1.toString();
    const str2 = num2.toString();
    const charMap = {};

    for (let i = 0; i < str1.length; i++) {
        charMap[str1[i]] = (charMap[str1[i]] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
        charMap[str2[i]] = (charMap[str2[i]] || 0) - 1;
    }

    const objVal = Object.values(charMap);
    for (let i = 0; i < objVal.length; i++) {
        if (objVal[i] != 0) {
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(22,222) )