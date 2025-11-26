/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const result = new ListNode(0);
  let node = result;
  let cary = 0;

  while (l1 || l2 || cary) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + cary;

    cary = Math.floor(sum / 10);
    node.next = new ListNode(sum % 10);

    l1 = l1?.next;
    l2 = l2?.next;
    node = node.next;
  }

  return result.next;
};
