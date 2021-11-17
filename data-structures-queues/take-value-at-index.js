/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let valueAtIndex;
  for (let i = 0; i < index; i++) {
    valueAtIndex = queue.dequeue();
    queue.enqueue(valueAtIndex);
  }
  return queue.dequeue();
}
