/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var currentArray = [];
  if (size > array.length) {
    newArray = array;
  } else {
    for (var i = 0; i < array.length; i++) {
      if ((i + 1) % size === 0) {
        currentArray.push(array[i]);
        newArray.push(currentArray);
        currentArray = [];
      } else {
        currentArray.push(array[i]);
      }
    }
    if (currentArray.length !== 0) {
      newArray.push(currentArray);
    }
  }
  return newArray;
}
