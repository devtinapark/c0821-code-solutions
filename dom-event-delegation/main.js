var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (event) {
  console.log('event.target: ', event.target, 'event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var ancestorItem = event.target.closest('.task-list-item');
    console.log(ancestorItem);
    ancestorItem.remove();
  }
});
