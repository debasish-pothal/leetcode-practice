# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getMid(self, node):
        slow = node
        fast = node

        while fast and fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next

        return slow

    def merge(self, l1, l2):
        dummy = ListNode()
        prev = dummy

        while (l1 and l2):
            if l1.val < l2.val:
                prev.next = l1
                l1 = l1.next
            else:
                prev.next = l2
                l2 = l2.next
            
            prev = prev.next

            prev.next = l1 or l2

        return dummy.next

    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        mid = self.getMid(head)
        rightHead = mid.next
        mid.next = None

        leftList = self.sortList(head)
        rightList = self.sortList(rightHead)

        return self.merge(leftList, rightList)