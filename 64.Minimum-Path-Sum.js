/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const result = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Infinity)
  );

  result[0][0] = grid[0][0];

  for (let r = 1; r < rows; r++) {
    result[r][0] = result[r - 1][0] + grid[r][0];
  }

  for (let c = 1; c < cols; c++) {
    result[0][c] = result[0][c - 1] + grid[0][c];
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      result[r][c] = Math.min(
        result[r][c],
        grid[r][c] + result[r - 1][c],
        grid[r][c] + result[r][c - 1]
      );
    }
  }

  return result[rows - 1][cols - 1];
};
