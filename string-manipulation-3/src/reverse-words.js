/* exported reverseWords */
function reverseWords(string) {
  var wordsReversed = '';
  var arrayReversed = [];
  var arrayOriginal = string.split(' ');
  for (var i = 0; i < arrayOriginal.length; i++) {
    var lettersOriginal = arrayOriginal[i].split('');
    var lettersReversed = lettersOriginal.reverse();
    var wordReversed = lettersReversed.join('');
    arrayReversed.push(wordReversed);
  }
  wordsReversed = arrayReversed.join(' ');
  return wordsReversed;
}
