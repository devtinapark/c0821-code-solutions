/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    newArray = array;
  } else {
    for (var j = array.length - count; j < array.length; j++) {
      newArray.push(array[j]);
    }
  }
  return newArray;
}
