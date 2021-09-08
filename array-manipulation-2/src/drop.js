/* exported drop */
function drop(array, count) {
  var newArray = [];
  if (count <= array.length) {
    for (var j = count; j < array.length; j++) {
      newArray.push(array[j]);
    }
    return newArray;
  } else {
    return [];
  }
}
