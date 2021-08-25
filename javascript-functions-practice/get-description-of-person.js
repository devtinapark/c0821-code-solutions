/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var desPerson = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return desPerson;
}
