function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    //create boolean to check for swap
    let swapped = false;
    //go through array length-i+1 times since each iteration fixes one number in place
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        //swap out numbers if current num is bigger than one next to it
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    //if no swaps, exits loop (arr is sorted)
    if (!swapped) break;
  }
  return array;
}
