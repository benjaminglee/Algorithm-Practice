//find all 3 number sums within an arr of distinct ints

function threeNumberSum(array, targetSum) {
  //sort
  const sortedArr = array.slice().sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    //init two pointers to track which nums we've visited
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
      let sum = sortedArr[i] + sortedArr[leftPointer] + sortedArr[rightPointer];
      if (sum === targetSum) {
        result.push([
          sortedArr[i],
          sortedArr[leftPointer],
          sortedArr[rightPointer],
        ]);
        rightPointer--;
        leftPointer++;
      } else if (sum > targetSum) {
        rightPointer--;
      } else {
        leftPointer++;
      }
    }
  }
  return result;
}
