/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const lastValueOriginal = stack.peek();
  if (typeof lastValueOriginal === 'undefined') {
    return undefined;
  }
  const result = stack.peek(stack.pop());
  stack.push(lastValueOriginal);
  return result;
}
