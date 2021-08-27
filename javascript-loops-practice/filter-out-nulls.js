/* exported filterOutNulls */
function filterOutNulls(values) {
  var newarray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newarray.push(values[i]);
    }
  }
  return newarray;
}
