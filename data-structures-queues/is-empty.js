/* exported isEmpty */

function isEmpty(queue) {
  return typeof queue.peek() === 'undefined';
}
