/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let diff = Infinity;
  let prev = null;

  const traverse = (node) => {
    if (node.left) traverse(node.left);

    if (prev) {
      diff = Math.min(diff, node.val - prev.val);
    }

    prev = node;

    if (node.right) traverse(node.right);
  };

  traverse(root);

  return diff;
};
