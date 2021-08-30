function handleClick(event) {
  console.log('button clicked', event, event.target);
}
var clickButton = document.querySelector('.click-button');
clickButton.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered', event, event.target);
}
var hoverButton = document.querySelector('.hover-button');
hoverButton.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked', event, event.target);
}
var dcButton = document.querySelector('.double-click-button');
dcButton.addEventListener('dblclick', handleDoubleClick, false);
