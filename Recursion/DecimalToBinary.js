//convert decimal numbers to binary
// 4 --> 100
// 6 --> 110

/*
    6 //2 = 3 .... 0
        3//2 = 1 ...1
            1///2 = 0 ... 1
            Answer: 110
*/
function decimalToBinary(number, result){
    if(number==0){
        return result
    }
    result = number % 2 + result;
    return decimalToBinary(Math.floor(number/2), result)
}
console.log(decimalToBinary(6, ''))