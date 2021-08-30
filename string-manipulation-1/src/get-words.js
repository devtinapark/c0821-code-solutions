/* exported getWords */
function getWords(string) {
  var array = [];
  var currentWord = '';
  if (string === '') {
    array = [];
  } else {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        array.push(currentWord);
        currentWord = '';
      } else {
        currentWord += string[i];
      }
    }
    array.push(currentWord);
  }
  return array;
}
