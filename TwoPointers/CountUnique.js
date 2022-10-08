/**
 * Count unique values in an array of integers. 
 * Array can be altered
 */

const countUnique = (array) => {
    let i = 0;
    let j = 1;
    while (j < array.length) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j]
        }
        j++;
    }
    return i + 1; // i is the index with last unique value.. i+1 is the number of unique elements
}

console.log(countUnique([6, 6, 1, 1, 2, 3, 4, 4, 5, 5, 5]))