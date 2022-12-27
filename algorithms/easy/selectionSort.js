function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minimumIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minimumIdx] > array[j]) {
        minimumIdx = j;
      }
    }
    let temp = array[i];
    array[i] = array[minimumIdx];
    array[minimumIdx] = temp;
  }
  return array;
}
