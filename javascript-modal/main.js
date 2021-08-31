var $popUp = document.querySelector('#popUp');
var $OMbutton = document.querySelector('.OMbutton');
var $NObutton = document.querySelector('.NObutton');

function openPopUp(event) {
  $popUp.className = 'row justify-center align-center fixed blackBG';
}

function closePopUp(event) {
  $popUp.className = 'row justify-center align-center fixed blackBG disappear';
}

$OMbutton.addEventListener('click', openPopUp);
$NObutton.addEventListener('click', closePopUp);
