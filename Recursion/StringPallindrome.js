// Check if the Given string is pallindrome or not, return type boolean

function checkPallindrome(string){
    if(string.length<1){
        return true;
    }
    if(string[0] == string[string.length-1]){
        return checkPallindrome(string.slice(1, string.length-1 ));
    }
    
     
    return false;
}

console.log(checkPallindrome("axa"))