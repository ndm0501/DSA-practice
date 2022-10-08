/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)
 */


function areThereDuplicates(...array) {
    // good luck. (supply any arguments you deem necessary.)
    let i = 0, j = 1;
    array = array.sort((a, b) => {
        if (typeof a === 'string' && typeof b === 'string') {
            return a.charCodeAt(0) - b.charCodeAt(0);
        } else {
            return a - b;
        }
    });

    while (j < array.length) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j]
        }
        j++;
    }

    return i !== array.length - 1;
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'))
console.log(areThereDuplicates(1,2,3,2))
console.log(areThereDuplicates(1, 2, 3))
