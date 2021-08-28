/* exported capitalize */
function capitalize(word) {
  var newChar = '';
  var newWord = '';
  newChar = word[0].toUpperCase();
  newWord += newChar;
  newChar = '';
  for (var i = 1; i < word.length; i++) {
    newChar = word[i].toLowerCase();
    newWord += newChar;
    newChar = '';
  }
  return newWord;
}
