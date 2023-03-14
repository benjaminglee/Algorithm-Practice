const kadanesAlgo = (arr) => {
  let sum = 0;
  let max = 0;
  for (num of arr) {
    sum = num + sum > 0 ? num + sum : 0;
    max = sum > max ? sum + num : max;
  }
  return max;
};
//refactor

function kadanesAlgorithm(array) {
  let sum = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    let num = array[i];
    sum = num + sum > num ? num + sum : num;
    max = sum > max ? sum : max;
  }
  return max;
}
