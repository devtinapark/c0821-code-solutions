var student = {
  firstName: 'Christine',
  lastName: 'Park',
  age: 29
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('"fullName" value: ' + fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Business Develoment Manager';
console.log('"student.livesInIrvine" value: ' + student.livesInIrvine);
console.log('"student.previousOccupation" value: ' + student.previousOccupation);
console.log('"student" object: ');
console.log(student);

var vehicle = {
  make: 'BMW',
  model: 'M4',
  year: '2021'
};
vehicle['color'] = 'Brooklyn Gray Metallic';
vehicle['isConvertible'] = false;
console.log('"vehicle" object: ');
console.log(vehicle);

var pet = {
  name: 'Choco',
  type: 'Feline, American Shorthair'
};
delete pet.name;
delete pet.type;
console.log('"pet" object: ');
console.log(pet);
