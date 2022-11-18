function firstNonRepeatingCharacter(string) {
  //store results
  const cache = {};
  //iterate through and store in obj
  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (cache[current] >= 0) cache[current]++;
    else cache[current] = 0;
  }
  //iterate through and check cache value against each letter, return on first nonrepeating
  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (cache[current] === 0) return i;
  }
  return -1;
}
