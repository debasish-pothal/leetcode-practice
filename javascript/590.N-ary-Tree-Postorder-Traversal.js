/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const result = [];

  if (!root) return result;

  const stack = [root];

  while (stack.length) {
    const { val, children } = stack.pop();

    stack.push(...children);
    result.push(val);
  }

  return result.reverse();
};
