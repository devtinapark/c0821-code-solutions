/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var initialsPerson = person.firstName.charAt(0) + person.lastName.charAt(0);
  return initialsPerson;
}
