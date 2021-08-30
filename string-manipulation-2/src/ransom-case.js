/* exported ransomCase */
function ransomCase(string) {
  var newWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newWord += string[i].toLowerCase();
    } else {
      newWord += string[i].toUpperCase();
    }
  }
  return newWord;
}
