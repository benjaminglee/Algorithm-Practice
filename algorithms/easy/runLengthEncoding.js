function runLengthEncoding(string) {
  //set current character
  let currentChar = string[0];
  //record number of occurences
  let count = 0;
  let output = '';
  for (let i = 0; i < string.length; i++) {
    let currentElement = string[i];
    if (currentElement !== currentChar) {
      //append number of elements when new character is encountered or count = 9
      output += `${count}${currentChar}`;
      count = 1;
      currentChar = currentElement;
    } else if (count === 9) {
      output += `${count}${currentChar}`;
      count = 1;
    } else {
      count++;
    }
  }
  output += `${count}${currentChar}`;
  return output;
}
