/*
     0 1 1 2 3 5 8 13 ...
     f(n) = f(n-1) + f(n-2)
*/

function fib(n){
    if(n<2){
        return n
    }
    return fib(n-2) + fib(n-1);
}
console.log(fib(7))