# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        # find middle
        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # reverse 2nd half
        prev = None
        node = slow
        
        while node:
            nxt = node.next
            node.next = prev
            prev = node
            node = nxt

        # loop and find
        head1 = head
        head2 = prev

        while head2:
            if head1.val != head2.val:
                return False

            head1 = head1.next
            head2 = head2.next

        return True