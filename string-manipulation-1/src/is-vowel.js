/* exported isVowel */
function isVowel(character) {
  var yesVowel = false;
  if (character === 'a' || character === 'A' || character === 'e' || character === 'E' || character === 'i' || character === 'I' ||
    character === 'o' || character === 'O' || character === 'u' || character === 'U') {
    yesVowel = true;
  }
  return yesVowel;
}
