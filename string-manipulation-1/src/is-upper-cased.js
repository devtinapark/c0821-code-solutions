/* exported isUpperCased */
function isUpperCased(word) {
  var allUpper = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      allUpper = false;
    }
  }
  return allUpper;
}
