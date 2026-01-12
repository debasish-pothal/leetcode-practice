/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;

  const grid = [];

  for (let r = 0; r < rows; r++) {
    grid[r] = [];
    for (let c = 0; c < cols; c++) {
      if (c === cols - 1 && r === rows - 1) {
        grid[r][c] = 1;
      }

      if (obstacleGrid[r][c] === 1) {
        grid[r][c] = 0;
      }
    }
  }

  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c--) {
      if (grid[r][c] === 0 || (r === rows - 1 && c === cols - 1)) continue;

      grid[r][c] =
        (grid[r + 1] && grid[r + 1][c] ? grid[r + 1][c] : 0) +
        (grid[r][c + 1] !== undefined ? grid[r][c + 1] : 0);
    }
  }

  return grid[0][0];
};
