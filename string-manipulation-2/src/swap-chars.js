/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var charFI = string[firstIndex];
  var charSI = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i !== firstIndex && i !== secondIndex) {
      newString += string[i];
    } else if (i === firstIndex) {
      newString += charSI;
    } else {
      newString += charFI;
    }
  }
  return newString;
}
