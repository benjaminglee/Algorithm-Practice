function isMonotonic(array) {
    let decreasing = false;
    let increasing = false;
    if(array.length === 1) return true;
    for (let i = 1; i < array.length; i++) {
      if(array[i-1] < array[i]) increasing = true;
      if (array[i-1] > array[i]) decreasing = true;
    }
    return decreasing === true && increasing === true ? false : true;
  }