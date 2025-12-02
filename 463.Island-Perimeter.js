/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();

  const dfs = (i, j) => {
    if (i >= rows || j >= cols || i < 0 || j < 0 || grid[i][j] === 0) {
      return 1;
    }

    if (visited.has(`${i},${j}`)) {
      return 0;
    }

    visited.add(`${i},${j}`);

    return dfs(i, j + 1) + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j - 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j]) {
        return dfs(i, j);
      }
    }
  }
};
