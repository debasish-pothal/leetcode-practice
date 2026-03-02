# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []

        result = []
        stack1 = [root]

        while len(stack1):
            node = stack1.pop()
            result.append(node.val)

            if node.right:
                stack1.append(node.right)
            if node.left:
                stack1.append(node.left)

        return result