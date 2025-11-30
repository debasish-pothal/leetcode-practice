/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const leftDummy = new ListNode(0);
  const rightDummy = new ListNode(0);

  let left = leftDummy;
  let right = rightDummy;

  let current = head;

  while (current) {
    if (current.val < x) {
      left.next = current;
      left = left.next;
    } else {
      right.next = current;
      right = right.next;
    }

    current = current.next;
  }

  right.next = null;
  left.next = rightDummy.next;

  return leftDummy.next;
};
