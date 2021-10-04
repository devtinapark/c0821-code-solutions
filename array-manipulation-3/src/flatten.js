/* exported flatten */
function flatten(array) {
  var arrayNew = [];
  var current;
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (var j = 0; j < array[i].length; j++) {
        current = array[i][j];
        arrayNew.push(current);
      }
    } else {
      current = array[i];
      arrayNew.push(current);
    }
  }
  return arrayNew;
}
