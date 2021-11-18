/* exported removeNext */

function removeNext(list) {
  const newNode = list;
  if (list.next === null) return;
  list.next = newNode.next.next;
}
