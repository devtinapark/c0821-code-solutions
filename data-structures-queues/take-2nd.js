/* exported take2nd */

function take2nd(queue) {
  if (typeof queue.peek() === 'undefined') return;
  const frontOriginal = queue.dequeue();
  queue.enqueue(frontOriginal);
  return queue.dequeue();
}
