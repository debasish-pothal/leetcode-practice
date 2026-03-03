# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        prev = None
        diff = float('inf')

        def traverse(node):
            if not node:
                return

            traverse(node.left)
            
            nonlocal prev, diff

            if prev:
                diff = min(diff, node.val - prev.val)
            prev = node

            traverse(node.right)
        
        traverse(root)

        return diff