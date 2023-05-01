function semordnilap(words) {
    const pairs = []
    const wordsSet = new Set(words)
    for(let i = 0; i < words.length; i++) {
      let reverse = words[i].split('').reverse().join('');
      if(wordsSet.has(reverse) && reverse !== words[i]) {
        pairs.push([words[i],reverse]);
        wordsSet.delete(reverse);
        wordsSet.delete(words[i]);
      }
    }
    return pairs;
  }