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
var insertionSortList = function (head) {
  if (!head) return head;

  const dummy = new ListNode(0);
  let curr = head;

  while (curr) {
    const next = curr.next;
    let prev = dummy;

    while (prev.next && curr.val > prev.next.val) {
      prev = prev.next;
    }

    curr.next = prev.next;
    prev.next = curr;

    curr = next;
  }

  return dummy.next;
};
