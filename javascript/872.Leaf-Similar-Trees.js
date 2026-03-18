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
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leafs1 = [];
  const leafs2 = [];

  const dfs = (node, leafs) => {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      leafs.push(node.val);
    }

    dfs(node.left, leafs);
    dfs(node.right, leafs);
  };

  dfs(root1, leafs1);
  dfs(root2, leafs2);

  if (leafs1.length !== leafs2.length) {
    return false;
  }

  for (let i = 0; i < leafs1.length; i++) {
    if (leafs1[i] !== leafs2[i]) {
      return false;
    }
  }

  return true;
};
