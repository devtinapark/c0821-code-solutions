var $char = document.querySelectorAll('span');
var i = 0;

function check(event) {
  if (event.key === $char.item(i).textContent) {
    $char.item(i).className = 'passed';
    $char.item(i + 1).className = 'underlined';
    i += 1;
  } else {
    $char.item(i).className = 'error';
  }
}

window.addEventListener('keydown', check);
