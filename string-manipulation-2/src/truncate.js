/* exported truncate */
function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < length && i < string.length; i++) {
    newString += string[i];
  }
  newString += '...';
  return newString;
}
