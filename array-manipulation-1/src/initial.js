/* exported initial */
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
