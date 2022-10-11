/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
 */

const isSubsequence = (subseq, string) => {
    let j = 0;
    if((!string && !subseq) || !subseq) return true;
    if (!string) {
        return false;
    }

    for (let i = 0; i < string.length && j < subseq.length; i++) {
        if (subseq[j] === string[i]) {
            j++;
        }
    }

    return j === subseq.length;

}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))
console.log(isSubsequence('', 'acb'))
console.log(isSubsequence('', ''))