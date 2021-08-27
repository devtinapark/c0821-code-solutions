/* exported getStudentNames */
function getStudentNames(students) {
  var newarray = [];
  for (var i = 0; i < students.length; i++) {
    var onlyname = students[i].name;
    newarray.push(onlyname);
  }
  return newarray;
}
