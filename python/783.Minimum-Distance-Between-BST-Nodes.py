# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        nodes = []
        diff = float('inf')

        def traverse(node):
            if node.left:
                traverse(node.left)
            nodes.append(node.val)
            if node.right:
                traverse(node.right)
        
        traverse(root)

        for i in range(1, len(nodes)):
            diff = min(diff, nodes[i] - nodes[i - 1])

        return diff

        