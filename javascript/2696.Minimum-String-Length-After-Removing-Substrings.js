/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const stack = [];

  for (const c of s) {
    if (
      stack.length &&
      ((c === "D" && stack[stack.length - 1] === "C") ||
        (c === "B" && stack[stack.length - 1] === "A"))
    ) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length;
};
