/* exported filterOutStrings */
function filterOutStrings(values) {
  var newarray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newarray.push(values[i]);
    }
  }
  return newarray;
}
