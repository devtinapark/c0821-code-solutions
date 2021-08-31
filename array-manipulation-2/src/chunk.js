/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var currentArray = [];
  if (size > array.length) {
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else {
    for (var j = 0; j < array.length; j++) {
      if ((j + 1) % size === 0) {
        newArray.push(currentArray);
        currentArray = '';
      } else {
        currentArray.push(array[j]);
      }
    }
  }
  return newArray;
}
