function smallestDifference(arrayOne, arrayTwo) {
    //brute force solution, O(n^2) time
    // let smallest = Infinity;
    // let numbers = []
    // for(let i = 0 ; i < arrayOne.length; i++) {
    //   let currentOne = arrayOne[i];
    //   for(let j = 0; j < arrayTwo.length; j++) {
    //     let currentTwo = arrayTwo[j]
    //     if(Math.abs(currentOne - currentTwo) < smallest) {
    //       smallest = Math.abs(currentOne - currentTwo)
    //       numbers[0] = currentOne
    //       numbers[1] = currentTwo
    //     }
    //   }
    // }
    // return numbers

    //refactored solution using pointers, O(nlog(n) + mlog(m)) time )
    arrayOne.sort((a,b) => a-b)
    arrayTwo.sort((a,b) => a-b)
    let minNums = [Infinity, -Infinity]
    let pointerOne = 0
    let pointerTwo = 0
    while(pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
      let numOne = arrayOne[pointerOne]
      let numTwo = arrayTwo[pointerTwo]
      if(Math.abs(numOne-numTwo) < Math.abs(minNums[0] - minNums[1])) {
        minNums = [numOne, numTwo]
      }
      if(numOne < numTwo) pointerOne++
      else if (numOne > numTwo) pointerTwo++
      else if (numOne === numTwo) return minNums
    }
    return minNums
  }