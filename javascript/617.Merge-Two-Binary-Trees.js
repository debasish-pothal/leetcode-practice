/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return null;
  }

  const v1 = root1 ? root1.val : 0;
  const v2 = root2 ? root2.val : 0;
  const root = new TreeNode(v1 + v2);

  root.left = mergeTrees(root1?.left, root2?.left);
  root.right = mergeTrees(root1?.right, root2?.right);

  return root;
};
