// Reverse a give string
// Input: Hello
//Output: olleH

function reverseString(string){
    if(string.length< 1){
        return string;
    }
    return reverseString(string.slice(1)) + string[0]
}
console.log(reverseString("PAALPLP"))
