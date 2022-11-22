function binarySearch(array, target) {
  //get midpoint of array
  let halfway = Math.floor(array.length - 1 / 2);
  //return index if target
  if (array[halfway] === target) return halfway;
  //return -1 if length is 1
  if (array.length === 1) return -1;
  //if larger return left half
  else if (array[halfway] > target)
    return binarySearch(array.slice(0, halfway), target);
  //if lower return right half
  else if (array[halfway] < target)
    return binarySearch(array.slice(halfway), target);
}
