/* exported maxValue */

function maxValue(stack) {
  let maxValue = -Infinity;
  while (typeof stack.peek() !== 'undefined') {
    maxValue = Math.max(maxValue, stack.pop());
  }
  return maxValue;
}
