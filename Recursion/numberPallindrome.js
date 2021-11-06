/*
Check if given number is pallindrome or not, using recursion
*/

function reverse(number, value=0){
    if(number<=0){
        return value
    }

    let remainder = number%10;
    let nextnumber = Math.floor(number/10);
    let reverseNumber =  reverse(nextnumber, value*10+remainder);

    return reverseNumber;
}
function isPallindrome(number){
    if(reverse(number) == number){
        return true;
    }
    return false;
}

console.log(isPallindrome(123));