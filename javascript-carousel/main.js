/* var $arrowLeft = document.querySelector('#arrowLeft');
var $arrowRight = document.querySelector('#arrowRight'); */
var $navCircleBox = document.querySelector('#navCircleBox');
var $navList = document.querySelectorAll('.nav');
var $img = document.querySelector('img');

/* $arrowLeft.addEventListener('click', showBefore);
$arrowRight.addEventListener('click', showAfter); */
$navCircleBox.addEventListener('click', showCorresponding);

var imageNames = [
  {
    name: 'images/004.png',
    navID: 'nav2',
    i: 0
  },
  {
    name: 'images/007.png',
    navID: 'nav3',
    i: 1
  },
  {
    name: 'images/025.png',
    navID: 'nav4',
    i: 2
  },
  {
    name: 'images/039.png',
    navID: 'nav5',
    i: 3
  },
  {
    name: 'images/001.png',
    navID: 'nav1',
    i: 4
  }
];

var intervalID = null;
var srcText = '';
var i = 0;

function DoTransitions() {
  srcText = imageNames[i].name;
  $img.setAttribute('src', srcText);
  correspondNav(imageNames[i].navID);
  if (i === 4) {
    i = 0;
  } else {
    i++;
  }
}

function correspondNav(navID) {
  for (var j = 0; j < $navList.length; j++) {
    if ($navList[j].getAttribute('id') === navID) {
      $navList[j].className = 'nav fas fa-circle fa-sm';
    } else {
      $navList[j].className = 'nav far fa-circle fa-sm';
    }
  }
}

function startTransitions() {
  intervalID = setInterval(DoTransitions, 3000);
}

startTransitions();

function stopTransitions() {
  clearInterval(intervalID);
}

function showCorresponding(event) {
  stopTransitions();
  if (event.target.tagName === 'I') {
    var targetID = event.target.getAttribute('id');
    correspondNav(targetID);
    for (var k = 0; k < imageNames.length; k++) {
      if (imageNames[k].navID === targetID) {
        srcText = imageNames[k].name;
        $img.setAttribute('src', srcText);
        i = imageNames[k].i;
      }
    }
  }
  startTransitions();
}
/*
function showBefore(event) {
  stopTransitions();
  if (i > 0) {
    srcText = imageNames[i - 1].name;
    $img.setAttribute('src', srcText);
  }
  startTransitions();
}

function showAfter(event) {
  stopTransitions();
  if (i < 4) {
    srcText = imageNames[i + 1].name;
    $img.setAttribute('src', srcText);
  }
  startTransitions();
}
*/
