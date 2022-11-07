function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] + current === targetSum) return [current, array[j]];
    }
  }
  return [];
}
