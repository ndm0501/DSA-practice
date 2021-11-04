/*
In an n x m grid, find the number of paths to reach the rightmost block
Constraints:
Travel direction restricted to right and down movements only
*/

function numberOfPaths(n, m){
    if(n == 1 || m == 1){
        return 1
    }
    return numberOfPaths(n, m-1) + numberOfPaths(n-1, m);
}
console.log(numberOfPaths(3,4))