/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
  capacity.sort((a, b) => b - a);

  let total = apple.reduce((a, b) => a + b);

  let index = 0;

  while (total > 0) {
    total -= capacity[index];
    index += 1;
  }

  return index;
};
