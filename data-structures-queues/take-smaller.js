/* exported takeSmaller */

function takeSmaller(queue) {
  if (typeof queue.peek() === 'undefined') return undefined;
  const firstOriginal = queue.dequeue();
  if (typeof queue.peek() === 'undefined') return firstOriginal;
  const secondOriginal = queue.dequeue();
  if (firstOriginal <= secondOriginal) {
    queue.enqueue(secondOriginal);
    return firstOriginal;
  } else {
    queue.enqueue(firstOriginal);
    return secondOriginal;
  }
}
