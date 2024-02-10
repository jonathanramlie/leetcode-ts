export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next === undefined ? null : next;
  }
}

// Remove elemnents based on proided val
function removeElements(head: ListNode | null, val: number): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  // Need to loop from start to end if found exact val
  while (curr !== null) {
    // If this value isn't what we searched for
    // Continue to next node, also update pointers to new one
    if (curr.val !== val) {
      prev = curr;
      curr = curr.next;
      continue;
    }

    // Here we found node to be removed
    // There's caveat that the value to be removed is in the head (first element)
    // We can check for `prev` if it's already initialized or not
    // If not null, just connect `prev.next` to `curr.next` and continue loop
    if (prev !== null) {
      curr = prev.next = curr.next;
    } else {
      // If `prev` still null, shift head to next one instead, then continue loop
      curr = head = curr.next;
    }
  }

  return head;
}

export default removeElements;
