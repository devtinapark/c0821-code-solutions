/* exported take */
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count && i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
