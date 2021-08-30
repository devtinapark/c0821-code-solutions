var counter = 0;
var hotButton = document.querySelector('.hot-button');
var counterText = document.querySelector('.click-count');

function incrementCounter(event) {
  counter += 1;
  counterText.textContent = 'Clicks: ' + counter;
  if (counter < 4) {
    hotButton.className = 'hot-button cold';
  } else if (counter < 7) {
    hotButton.className = 'hot-button cool';
  } else if (counter < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (counter < 13) {
    hotButton.className = 'hot-button warm';
  } else if (counter < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
}

hotButton.addEventListener('click', incrementCounter, false);
