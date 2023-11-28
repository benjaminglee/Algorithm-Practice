const _minChange = (amount, coins, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  let minCoins = Infinity;
  for (const coin of coins) {
    const numCoins = 1 + _minChange(amount - coin, coins, memo);
    minCoins = Math.min(minCoins, numCoins);
  }
  memo[amount] = minCoins;
  return minCoins;
};

const minChange = (amount, coins) => {
  const val = _minChange(amount, coins);
  if (val === Infinity) return -1;
  else return val;
};
