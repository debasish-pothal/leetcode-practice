/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const opening = ["(", "{", "["];

  const closingToOpeningMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (const c of s) {
    if (opening.includes(c)) {
      stack.push(c);
    } else {
      const stack_top = stack[stack.length - 1];
      const close_top = closingToOpeningMap[c];

      if (stack_top === close_top) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
