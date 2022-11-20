function generateDocument(characters, document) {
  if (document === "") return true;
  const frequencies = {};
  //go through characters and record number of each char
  for (let i = 0; i < characters.length; i++) {
    let current = characters[i];
    if (frequencies[current]) frequencies[current]++;
    else frequencies[current] = 1;
  }
  //go through doc, decrementing char for each val. if frequency returns falsey, return false
  for (let i = 0; i < document.length; i++) {
    let current = document[i];
    if (frequencies[current]) frequencies[current]--;
    else return false;
  }
  return true;
}
