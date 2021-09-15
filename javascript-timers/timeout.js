var $texth1 = document.querySelector('h1');

function changeTextH1() {
  if ($texth1.textContent === '...') {
    $texth1.textContent = 'Hello There';
  } else {
    $texth1.textContent = '...';
  }
}

function timer() {
  setTimeout(changeTextH1, 2.0 * 1000);
}

timer();
