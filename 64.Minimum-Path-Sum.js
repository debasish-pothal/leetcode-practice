/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const result = Array(cols);
  result[0] = grid[0][0];

  for (let c = 1; c < cols; c++) {
    result[c] = result[c - 1] + grid[0][c];
  }

  for (let r = 1; r < rows; r++) {
    result[0] += grid[r][0];

    for (let c = 1; c < cols; c++) {
      result[c] = grid[r][c] + Math.min(result[c], result[c - 1]);
    }
  }

  return result[cols - 1];
};
