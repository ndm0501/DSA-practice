/*
Given a set of characters and k
Find all the substrings of length k having characters from the set
*/
function substrOfLengthK(set, k, value=''){
    if(k==0){
        console.log(value);
        return;
    }
    for(let i=0; i<set.length; i++){
        
        substrOfLengthK(set, k-1, value + set[i])
    }
}
substrOfLengthK(['a', 'b'], 3)
substrOfLengthK(['a', 'b', 'c'], 2)