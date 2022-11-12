//check for valid subsequence in arr of integers

function isValidSubsequence(array, sequence) {
  //store index/matched
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    //loop through array
    let current = array[i];
    //if matching, go to next item in sequence
    if (sequence[count] === current) count++;
  }
  if (count === sequence.length) return true;
  return false;
}

//optimized/clean version
// function isValidSubsequence(array, sequence) {
//     let count = 0;
//     for(let i = 0; i < array.length; i ++) {
//       let current = array[i];
//       if(sequence[count] === current) count++
//       if(sequence.length === count) return true
//     }
//     return count===sequence.length
//   }
