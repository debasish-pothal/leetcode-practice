/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const stack = [];

  for (const operation of operations) {
    if (operation === "C") {
      stack.pop();
    } else if (operation === "D") {
      const num = stack[stack.length - 1] * 2;
      stack.push(num);
    } else if (operation === "+") {
      const num1 = stack[stack.length - 1];
      const num2 = stack[stack.length - 2];
      stack.push(num1 + num2);
    } else {
      stack.push(parseInt(operation));
    }
  }

  return stack.reduce((a, c) => a + c, 0);
};
