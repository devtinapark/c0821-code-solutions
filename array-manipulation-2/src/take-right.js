/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else {
    for (var j = array.length - count; j < array.length; j++) {
      newArray.push(array[j]);
    }
  }
  return newArray;
}
