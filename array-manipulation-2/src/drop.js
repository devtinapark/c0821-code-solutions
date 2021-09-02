/* exported drop */
function drop(array, count) {
  var newArray = [];
  if (count > array.length) {
    newArray = array;
  } else {
    for (var j = count; j < array.length; j++) {
      newArray.push(array[j]);
    }
  }
  return newArray;
}
