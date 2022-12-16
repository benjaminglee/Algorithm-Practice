function removeDuplicatesFromLinkedList(linkedList) {
  let current = linkedList;
  while (current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return linkedList;
}
