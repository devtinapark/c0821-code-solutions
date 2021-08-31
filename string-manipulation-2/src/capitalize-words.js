/* exported capitalizeWords */
function capitalizeWords(string) {
  var newStringCapital = '';
  var arrayWords = [];
  var currentWord = '';
  var capitalWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      arrayWords.push(currentWord);
      currentWord = '';
    } else {
      currentWord += string[i];
    }
  }
  arrayWords.push(currentWord);
  currentWord = '';
  for (var j = 0; j < arrayWords.length; j++) {
    currentWord += arrayWords[j].toLowerCase();
    capitalWord += currentWord[0].toUpperCase();
    for (var k = 1; k < currentWord.length; k++) {
      capitalWord += currentWord[k];
    }
    newStringCapital += capitalWord;
    capitalWord = '';
    currentWord = '';
    if (j !== arrayWords.length - 1) {
      newStringCapital += ' ';
    }
  }
  return newStringCapital;
}
