/* exported isLowerCased */
function isLowerCased(word) {
  var allLower = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      allLower = false;
    }
  } return allLower;
}
