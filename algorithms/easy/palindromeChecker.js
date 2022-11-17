function isPalindrome(string) {
  //single char is a palindrome
  if (string.length === 1) return true;
  for (let i = 0; i < Math.ceil(string.length / 2); i++) {
    let current = string[i];
    //if current character does not match mirrored char
    if (current !== string[string.length - 1 - i]) return false;
  }
  return true;
}
