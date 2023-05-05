function caesarCipherEncryptor(string, key) {
    //split word into chars
    const letters = string.split('')
      .map((x,i) => {
        //find mod of key if greater than 26
        const newLetter = string.charCodeAt(i) + (key%26);
        return String.fromCharCode((newLetter > 122 ? newLetter - 26 : newLetter))
      })
      .join('');
    return letters;
  }