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
  const result = [];

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    result.push(node.val);
    if (node.right) traverse(node.right);
  };

  traverse(root);

  let diff = Infinity;

  for (let i = 1; i < result.length; i++) {
    diff = Math.min(diff, result[i] - result[i - 1]);
  }

  return diff;
};
