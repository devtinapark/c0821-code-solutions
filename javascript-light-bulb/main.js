var $currentBG = document.querySelector('#currentBG');
var $currentCircle = document.querySelector('#currentCircle');

function doSwitch(event) {
  if ($currentBG.className === 'lightBG') {
    $currentBG.className = 'darkBG';
    $currentCircle.className = 'circle darkCircle';
  } else {
    $currentBG.className = 'lightBG';
    $currentCircle.className = 'circle lightCircle';
  }
}

$currentCircle.addEventListener('click', doSwitch, false);
