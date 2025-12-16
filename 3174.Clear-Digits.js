/**
 * @param {string} s
 * @return {string}
 */
const isDigit = (c) => c >= "0" && c <= "9";

var clearDigits = function (s) {
  const stack = [];

  for (const c of s) {
    if (stack.length && isDigit(c) && !isDigit(stack[stack.length - 1])) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join("");
};
