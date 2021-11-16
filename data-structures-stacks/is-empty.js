/* exported isEmpty */

function isEmpty(stack) {
  const lastValue = stack.peek();
  let result = false;
  if (lastValue === undefined) {
    result = true;
  }
  return result;
}

// Simpler solution: return typeof stack.peek() === 'undefined';
