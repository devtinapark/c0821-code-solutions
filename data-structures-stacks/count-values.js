/* exported countValues */

function countValues(stack) {
  let count = 0;
  while (typeof stack.pop() !== 'undefined') {
    count++;
  }
  return count;
}
