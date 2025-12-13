/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length;

  const res = Array.from({ length: n - 2 }, () =>
    Array.from({ length: n - 2 }, () => 0)
  );

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      for (let r = i; r < i + 3; r++) {
        for (let c = j; c < j + 3; c++) {
          res[i][j] = Math.max(res[i][j], grid[r][c]);
        }
      }
    }
  }

  return res;
};
