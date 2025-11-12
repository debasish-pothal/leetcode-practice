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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSameTree = (t1, t2) => {
  if (!t1 && !t2) {
    return true;
  }

  if (t1?.val === t2?.val) {
    return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
  }

  return false;
};

var isSubtree = function (root, subRoot) {
  if (!subRoot) {
    return true;
  }

  if (!root) {
    return false;
  }

  if (isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
