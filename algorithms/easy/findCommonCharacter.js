function commonCharacters(strings) {
    const cache = {};
    for(let i = 0; i < strings.length; i++) {
      //convert current word to set to remove duplicates
      let currentWord = new Set(strings[i].split(''));
      //iterate through and update cache
      currentWord.forEach( letter => {
        if(cache[letter]) cache[letter]++
        else cache[letter] = 1;
      })
    }
    //return letters where value of letter is length of string array
    return Object.keys(cache).filter((key) => cache[key] === strings.length);
  }