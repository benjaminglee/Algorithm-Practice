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
