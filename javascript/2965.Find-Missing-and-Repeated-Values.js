/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length;
  const total = n * n;
  const freq = new Array(total + 1).fill(0);
  let repeating;
  let missing;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      freq[grid[r][c]] += 1;
    }
  }

  for (let i = 1; i <= total; i++) {
    if (freq[i] === 0) {
      missing = i;
    }

    if (freq[i] > 1) {
      repeating = i;
    }
  }

  return [repeating, missing];
};
