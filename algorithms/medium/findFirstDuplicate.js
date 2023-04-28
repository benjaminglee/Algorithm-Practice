function firstDuplicateValue(array) {
    //cache results
    const cache ={};
    let duplicate = -1;
    for(let i =0; i < array.length; i++) {
      let current = array[i];
      if(cache[current]) {
        duplicate = current
        return duplicate;
      }
      else {
        cache[current] = true;
      }
    }
    return duplicate;
  }