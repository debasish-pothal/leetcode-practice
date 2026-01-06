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
var maxLevelSum = function (root) {
  if (!root) return 0;

  let maxSum = root.val;
  let currLevel = 1;
  let maxLevel = 1;
  const queue = [root];
  let head = 0;

  while (head < queue.length) {
    let currSum = 0;
    const size = queue.length - head;

    for (let i = 0; i < size; i++) {
      const node = queue[head];
      head += 1;

      currSum += node.val;

      if (node.left) queue.push(node.left);

      if (node.right) queue.push(node.right);
    }

    if (currSum > maxSum) {
      maxSum = currSum;
      maxLevel = currLevel;
    }

    currLevel += 1;
  }

  return maxLevel;
};
