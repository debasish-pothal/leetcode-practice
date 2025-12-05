/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (const token of tokens) {
    if (["+", "-", "*", "/"].includes(token)) {
      const num2 = stack.pop();
      const num1 = stack.pop();

      if (token === "+") {
        stack.push(num1 + num2);
      } else if (token === "-") {
        stack.push(num1 - num2);
      } else if (token === "*") {
        stack.push(num1 * num2);
      } else {
        stack.push(Math.trunc(num1 / num2));
      }
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack.pop();
};
