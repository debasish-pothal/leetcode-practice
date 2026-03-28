/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const count = new Array(101).fill(0);
  let current_height = 1;
  let mismatches = 0;

  for (const height of heights) {
    count[height] += 1;
  }

  for (let i = 0; i < heights.length; i++) {
    while (count[current_height] === 0) {
      current_height += 1;
    }

    if (heights[i] !== current_height) {
      mismatches += 1;
    }

    count[current_height] -= 1;
  }

  return mismatches;
};
