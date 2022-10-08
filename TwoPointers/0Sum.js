/*
Given sorted integer arrays
return first pair that sums to 0
*/

const sumZero = (array) => {
  const sum = 0;
  const pointer1 = 0;
  const pointer2 = array.length-1;

  for(let i=pointer1; i<=pointer2; i++){
    if(array[pointer1] + array[pointer2] === 0 ){
      return [pointer1, pointer2];
    }else if()
  }
}