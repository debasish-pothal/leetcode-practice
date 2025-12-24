/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  // get to middle
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second half
  let prev = null;

  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // iterate from both head till end
  let max = 0;
  let h1 = head;
  let h2 = prev;

  while (h2) {
    max = Math.max(max, h1.val + h2.val);

    h1 = h1.next;
    h2 = h2.next;
  }

  return max;
};
