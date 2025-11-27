/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;

  while (curr && curr.next) {
    // save
    const nextPair = curr.next.next;
    const second = curr.next;

    // swap
    second.next = curr;
    curr.next = nextPair;
    prev.next = second;

    // continue
    prev = curr;
    curr = nextPair;
  }

  return dummy.next;
};
