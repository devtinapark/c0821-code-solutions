/* exported isVowel */
function isVowel(character) {
  var newChar = character.toUpperCase();
  var yesVowel = false;
  if (newChar === 'A' || newChar === 'E' || newChar === 'I' || newChar === 'O' || newChar === 'U') {
    yesVowel = true;
  }
  return yesVowel;
}
