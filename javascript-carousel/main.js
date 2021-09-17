var $arrowLeft = document.querySelector('#arrowLeft');
var $arrowRight = document.querySelector('#arrowRight');
var $navCircleBox = document.querySelector('#navCircleBox');
var $navList = document.querySelectorAll('.nav');
var $img = document.querySelector('img');

$arrowLeft.addEventListener('click', showBefore);
$arrowRight.addEventListener('click', showAfter);
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
    showImagebyID(targetID);
    correspondNav(targetID);
  }
  startTransitions();
}

function showImagebyID(imageID) {
  for (var k = 0; k < imageNames.length; k++) {
    if (imageNames[k].navID === imageID) {
      srcText = imageNames[k].name;
      $img.setAttribute('src', srcText);
      i = imageNames[k].i;
    }
  }
}

function showBefore(event) {
  stopTransitions();
  var currentSrc = $img.getAttribute('src');
  var beforeID;
  for (var l = 0; l < imageNames.length; l++) {
    if (imageNames[l].name === currentSrc) {
      if (l > 0) {
        beforeID = l - 1;
      } else {
        beforeID = l + 4;
      }
      srcText = imageNames[beforeID].name;
      $img.setAttribute('src', srcText);
      correspondNav(imageNames[beforeID].navID);
    }
  }

  startTransitions();
}

function showAfter(event) {
  stopTransitions();
  var currentSrc = $img.getAttribute('src');
  var afterID;
  for (var m = 0; m < imageNames.length; m++) {
    if (imageNames[m].name === currentSrc) {
      if (m < 4) {
        afterID = m + 1;
      } else {
        afterID = m - 4;
      }
      srcText = imageNames[afterID].name;
      $img.setAttribute('src', srcText);
      correspondNav(imageNames[afterID].navID);
    }
  }

  startTransitions();
}
