const compress = (s) => {
    let i = 0;
    let j = 0;
    let result = '';
    while(j < s.length) {
      while(s[j] === s[i]) {
        j++
      }
      const number = j-i;
      if(number > 1) {
        result += number;
      }
      result += s[i];
      i = j;
    }
    return result;
  };