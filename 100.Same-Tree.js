/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const compare = (t1, t2) => {
    if (!t1 && !t2) {
      return true;
    }

    if (!t1 || !t2) {
      return false;
    }

    if (t1.val !== t2.val) {
      return false;
    }

    return compare(t1.left, t2.left) && compare(t1.right, t2.right);
  };

  return compare(p, q);
};
