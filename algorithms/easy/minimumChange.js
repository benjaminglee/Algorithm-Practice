//find minimum amount that can't be summed to from array of ints

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let currentChangeCreated = 0;
  for (let i = 0; i < coins.length; i++) {
    // if new coin is greater than total change + 1 we cannot make c+1 change
    if (coins[i] > currentChangeCreated + 1) return currentChangeCreated + 1;
    currentChangeCreated += coins[i];
  }
  return currentChangeCreated + 1;
}
