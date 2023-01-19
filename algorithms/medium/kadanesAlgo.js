const kadanesAlgo = (arr) => {
  let sum = 0;
  let max = 0;
  for (num of arr) {
    sum = num + sum > 0 ? num + sum : 0;
    max = sum > max ? sum + num : max;
  }
  return max;
};
