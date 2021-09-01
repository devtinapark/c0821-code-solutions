function handleFocus(event) {
  console.log("'focus' event was fired.", event.target.name);
}

function handleBlur(event) {
  console.log("'blur' event was fired.", event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var $input0 = document.querySelector('#contact-form').elements.name;
var $input1 = document.querySelector('#contact-form').elements.email;
var $message = document.querySelector('#contact-form').elements.message;

$input0.addEventListener('focus', handleFocus);
$input0.addEventListener('blur', handleBlur);
$input0.addEventListener('input', handleInput);

$input1.addEventListener('focus', handleFocus);
$input1.addEventListener('blur', handleBlur);
$input1.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
