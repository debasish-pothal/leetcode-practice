/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const result = Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    const temp = temperatures[i];

    while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
      const idx = stack.pop();
      const diff = i - idx;
      result[idx] = diff;
    }

    stack.push(i);
  }

  return result;
};
