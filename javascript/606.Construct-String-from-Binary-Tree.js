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
 * @return {string}
 */
var tree2str = function (root) {
  const result = [];

  const preorder = (node) => {
    if (!node) {
      return;
    }

    result.push("(");
    result.push(node.val);

    if (!node.left && node.right) {
      result.push("()");
    }

    preorder(node.left);
    preorder(node.right);

    result.push(")");
  };

  preorder(root);

  return result.join("").slice(1, -1);
};
