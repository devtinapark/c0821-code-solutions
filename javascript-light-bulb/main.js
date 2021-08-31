var $currentBG = document.querySelector('#currentBG');
var $currentCircle = document.querySelector('#currentCircle');
var isLightOn = true;

function doSwitch(event) {
  if (isLightOn) {
    $currentBG.className = 'darkBG';
    $currentCircle.className = 'circle darkCircle';
    isLightOn = false;
  } else {
    $currentBG.className = 'lightBG';
    $currentCircle.className = 'circle lightCircle';
    isLightOn = true;
  }
}

$currentCircle.addEventListener('click', doSwitch);
