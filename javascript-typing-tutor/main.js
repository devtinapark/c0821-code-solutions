var $char = document.querySelectorAll('span');
var i = 0;
var success = 0;
var fail = 0;
var $success = document.querySelector('.success');
var $fail = document.querySelector('.fail');
var $accuracy = document.querySelector('.accuracy');
var $popUp = document.querySelector('#popUp');
var $SObutton = document.querySelector('.SObutton');

function check(event) {
  if (event.key === $char[i].textContent) {
    $char[i].className = 'passed';
    $char[i + 1].className = 'underlined';
    success += 1;
    i += 1;
  } else {
    $char[i].className = 'error';
    fail += 1;
  }
}

function showPopUp(event) {
  if (event.key === $char[i].textContent && i === $char.length - 1) {
    $success.textContent = 'Success: ' + success;
    $fail.textContent = 'Fail: ' + fail;
    var accuracy = (success / (success + fail) * 100).toFixed(2);
    $accuracy.textContent = 'Accuracy: ' + accuracy + '%';
    $popUp.className = 'row justify-center align-center fixed blackBG';
  }
}

function startOver(event) {
  $char[0].className = 'underlined';
  for (i = 1; i < $char.length; i++) {
    $char[i].className = '';
  }
  i = 0;
  success = 0;
  fail = 0;
  $popUp.className = 'row justify-center align-center fixed blackBG disappear';
}

window.addEventListener('keydown', check);
window.addEventListener('keydown', showPopUp);
$SObutton.addEventListener('click', startOver);
