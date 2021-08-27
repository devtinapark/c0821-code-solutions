/* exported countdown */
function countdown(number) {
  var array = [];
  for (var i = 0; i <= number; i++) {
    var newnumber = number - i;
    array.push(newnumber);
  }
  return array;
}
