function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    //grab current
    let current = array[i];
    //grab next in arr
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] + current === targetSum) return [current, array[j]];
    }
  }
  //return empty if no solution
  return [];
}
