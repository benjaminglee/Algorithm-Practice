function getNthFibRecursively(n) {
  if (n == 2) return 1;
  else if (n == 1) return 0;
  //repeats work
  else return getNthFibRecursively(n - 1) + getNthFibRecursively(n - 2);
}
// slowest, 2^n time

function getNthFibMemoization(n, cache = { 1: 0, 2: 1 }) {
  if (cache[n] !== undefined) return cache[n];
  else {
    cache[n] =
      //by memoizing increase efficiency
      getNthFibMemoization(n - 1, cache) + getNthFibMemoization(n - 2, cache);
    return cache[n];
  }
}
// n time, n space

function getNthFibIteratively(n) {
  const fibArr = [0, 1];
  let idx = 3;
  if (n === 1) return 0;
  if (n === 2) return 1;
  while (idx < n) {
    let temp = fibArr[0] + fibArr[1];
    fibArr[0] = fibArr[1];
    fibArr[1] = temp;
    idx++;
  }
  return fibArr[0] + fibArr[1];
}
//most efficient space/time
