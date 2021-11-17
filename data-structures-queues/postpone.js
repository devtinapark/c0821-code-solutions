/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() === 'undefined') return;
  const frontOriginal = queue.dequeue();
  return queue.enqueue(frontOriginal);
}

// Is return statement necessary at the end?
