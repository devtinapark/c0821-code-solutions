/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newarray = [];
  for (var i = 0; i < words.length; i++) {
    var newword = words[i] + suffix;
    newarray.push(newword);
  }
  return newarray;
}
