//given an array, add all ints of a certain value to end, modifying original array

function moveElementToEnd(array, toMove) {

//create pointers
  let lp = 0;
  let rp = array.length - 1;

  while (lp < rp) {
    while (lp < rp && array[rp] == toMove) {
      rp--;
    }
    if (array[lp] == toMove) {
      let temp = array[rp];
      array[rp] = array[lp];
      array[lp] = temp;
    }
    lp++;
  }
  return array;
}
