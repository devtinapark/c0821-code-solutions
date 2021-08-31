/* exported includes */
function includes(array, value) {
  var present = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      present = true;
      break;
    }
  }
  return present;
}
