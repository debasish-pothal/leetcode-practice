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
  function* dfs(node) {
    if (!node) return;

    if (!node.left && !node.right) {
      yield node.val;
    }

    yield* dfs(node.left);
    yield* dfs(node.right);
  }

  const gen1 = dfs(root1);
  const gen2 = dfs(root2);

  while (true) {
    a = gen1.next();
    b = gen2.next();

    if (a.done && b.done) return true;
    if (a.done || b.done) return false;
    if (a.value !== b.value) return false;
  }
};
