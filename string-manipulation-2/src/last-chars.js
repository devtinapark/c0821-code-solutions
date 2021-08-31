/* exported lastChars */
function lastChars(length, string) {
  var newString = '';
  if (length > string.length) {
    newString += string;
  } else {
    for (var i = string.length - length; i < string.length; i++) {
      newString += string[i];
    }
  }
  return newString;
}
