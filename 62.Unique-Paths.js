/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const grid = Array.from({ length: m }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === 0 || j === 0 ? 1 : undefined))
  );

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }

  return grid[m - 1][n - 1];
};
