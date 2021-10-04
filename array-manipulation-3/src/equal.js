/* exported equal */
function equal(first, second) {
  var isEqual = false;
  if (first.length === 0 && second.length === 0) {
    isEqual = true;
  } else if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        isEqual = false;
        break;
      } else {
        isEqual = true;
      }
    }
  }
  return isEqual;
}
