var width = 10;
var height = 20;
var area = width * height;
console.log('"area" value: ' + area + '; type: ' + typeof area);

var bill = 1500;
var payment = 1800;
var change = payment - bill;
console.log('"change" value: ' + change + '; type: ' + typeof change);

var quizzes = 90;
var midterm = 99;
var final = 100;
var grade = (quizzes + midterm + final) / 3;
console.log('"grade" value: ' + grade + '; type: ' + typeof grade);

var firstName = 'Christine';
var lastName = 'Park';
var fullName = firstName + ' ' + lastName;
console.log('"fullName value: ' + fullName + '; type: ' + typeof fullName);

var pH = -1;
var isAcidic = pH < 7;
console.log('"isAcidic" value: ' + isAcidic + '; type: ' + typeof isAcidic);

var headCount = 18;
var isSparta = headCount === 300;
console.log('"isSparta" value: ' + isSparta + '; type: ' + typeof isSparta);

var motto = fullName;
motto += ' is the GOAT';
console.log('"motto" value: ' + motto + '; type: ' + typeof motto);
