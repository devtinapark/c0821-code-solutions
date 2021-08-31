/* exported drop */
function drop(array, count) {
  var newArray = [];
  if (count > array.length) {
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else {
    for (var j = count; j < array.length; j++) {
      newArray.push(array[j]);
    }
  }
  return newArray;
}
