/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const getMid = (head) => {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const merge = (list1, list2) => {
  const dummy = new ListNode();
  let ptr = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      ptr.next = list1;
      list1 = list1.next;
    } else {
      ptr.next = list2;
      list2 = list2.next;
    }

    ptr = ptr.next;
  }

  ptr.next = list1 ? list1 : list2;

  return dummy.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let left = head;
  const mid = getMid(head);
  const rightHead = mid.next;
  mid.next = null;
  let right = rightHead;

  left = sortList(left);
  right = sortList(right);
  return merge(left, right);
};
