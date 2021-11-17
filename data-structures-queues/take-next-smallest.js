/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() === 'undefined') return undefined;
  const firstValue = queue.dequeue();
  if (typeof queue.peek() === 'undefined') return firstValue;
  const secondValue = queue.peek();
  if (firstValue <= secondValue) { return firstValue; } else { queue.enqueue(firstValue); }
  while (typeof queue.peek() !== 'undefined') {
    const firstValue = queue.dequeue();
    const secondValue = queue.peek();
    if (firstValue <= secondValue) { return firstValue; } else { queue.enqueue(firstValue); }
  }
}
