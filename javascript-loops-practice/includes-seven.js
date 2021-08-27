/* exported includesSeven */
function includesSeven(array) {
  var answer = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      answer = true;
      break;
    }
  }
  return answer;
}
