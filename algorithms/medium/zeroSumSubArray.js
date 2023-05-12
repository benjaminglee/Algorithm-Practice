function zeroSumSubarray(nums) {
    let sumResult = {0:true}
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
      let current = nums[i];
      sum+=current;
      if(sumResult[sum] === true) return true;
      sumResult[sum] = true;
    }
    return false;
  }