/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = '';
  var lowerCased = word.toLowerCase();
  if (lowerCased === 'javascript') {
    newWord += 'JavaScript';
  } else {
    var firstChar = lowerCased[0].toUpperCase();
    newWord += firstChar;
    for (var i = 1; i < lowerCased.length; i++) {
      newWord += lowerCased[i];
    }
  }
  return newWord;
}
