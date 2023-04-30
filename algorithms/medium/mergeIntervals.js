function mergeOverlappingIntervals(array) {
    //sort through intervals in ascending order
    array.sort(function(a, b) {
    return a[0] - b[0];
    });
    //start output at first element
    let output = [array[0]];
    for(let i = 1; i < array.length; i++) {
      let current = array[i];
      let last = output[output.length-1]
      //compare current elem with last elem of output array
      if(current[0] <= last[1]) {
        //modify output array if overlap, otherwise add to output
        last[1] = Math.max(current[1], last[1]);
      }
      else {
        output.push(current);
      }
    }
    return output;
  }