var $texth1 = document.querySelector('h1');
var newInterval;
var secondsLeft = 3;

function start() {
  newInterval = setInterval(countdown, 1000);
}

function countdown() {
  if ($texth1.textContent === '~Earth Beeeelooowww Us~') {
    stop();
  } else if ($texth1.textContent === '1') {
    $texth1.textContent = '~Earth Beeeelooowww Us~';
  } else {
    $texth1.textContent = secondsLeft;
    secondsLeft -= 1;
  }
}

function stop() {
  clearInterval(newInterval);
}

start();
