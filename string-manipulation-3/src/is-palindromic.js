/* exported isPalindromic */
function isPalindromic(string) {
  var yesPalindromic = false;
  var arrayForward = [];
  var arrayBackward = [];
  var newStringForward = '';
  var newStringBackward = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      arrayForward.push(string[i]);
    }
  }
  for (var j = arrayForward.length - 1; j >= 0; j--) {
    arrayBackward.push(arrayForward[j]);
  }
  for (var k = 0; k < arrayForward.length; k++) {
    newStringForward += arrayForward[k];
  }
  for (var l = 0; l < arrayBackward.length; l++) {
    newStringBackward += arrayBackward[l];
  }
  if (newStringForward === newStringBackward) {
    yesPalindromic = true;
  }
  return yesPalindromic;
}
