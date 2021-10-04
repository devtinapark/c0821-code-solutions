/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var yesAnagram = false;
  var FS = firstString.split('');
  var SS = secondString.split('');
  for (var i = 0; i < firstString.length; i++) {
    if (FS[i] === ' ') {
      FS.splice(i, 1);
    }
  }
  for (var j = 0; j < firstString.length; j++) {
    if (SS[j] === ' ') {
      SS.splice(j, 1);
    }
  }
  var sortedFS = FS.sort().join('');
  var sortedSS = SS.sort().join('');
  if (sortedFS === sortedSS) {
    yesAnagram = true;
  }
  return yesAnagram;
}
