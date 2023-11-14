const sumPossible = (amount, numbers, memo={}) => {
    if(amount in memo) return memo[amount];
    if (amount === 0) return true;
    if (amount < 0) return false;
    for(const num of numbers) {
       if(sumPossible(amount-num, numbers, memo)) {
         memo[amount] = true;
         return true; 
       }
    }
    memo[amount] = false;
    return false;
  };

  // check if a sum is possible given an array of numbers