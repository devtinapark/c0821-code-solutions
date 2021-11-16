/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const lastValue = stack.pop();
  if (typeof lastValue === 'undefined') return;
  stack.push(value);
  stack.push(lastValue);
}
