// Sum upto naitural numbers
/*
    Example: 
    n = 10
    sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
    Answer: 55
*/

function sumUptoNumber(number){
    if(number < 2){
        return number;
    }
    return number + sumUptoNumber(number - 1);
}
console.log(sumUptoNumber(10))