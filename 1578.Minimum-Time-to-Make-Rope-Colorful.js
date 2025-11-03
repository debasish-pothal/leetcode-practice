/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let result = 0;
  let left = 0;

  for (let right = 1; right < colors.length; right++) {
    if (colors[left] === colors[right]) {
      if (neededTime[left] < neededTime[right]) {
        result += neededTime[left];
        left = right;
      } else {
        result += neededTime[right];
      }
    } else {
      left = right;
    }
  }

  return result;
};
