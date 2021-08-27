/* exported capitalize */
function capitalize(word) {
  var newChar = '';
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newChar = word[i].toUpperCase();
      newWord += newChar;
      newChar = '';
    } else {
      newChar = word[i].toLowerCase();
      newWord += newChar;
      newChar = '';

    }
  }
  return newWord;
}
