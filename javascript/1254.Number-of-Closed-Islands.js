/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let count = 0;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols) {
      return 0;
    }

    if (grid[r][c] === 1 || visited.has(`${r}-${c}`)) {
      return 1;
    }

    visited.add(`${r}-${c}`);

    return Math.min(dfs(r + 1, c), dfs(r - 1, c), dfs(r, c + 1), dfs(r, c - 1));
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0 && !visited.has(`${r}-${c}`)) {
        count += dfs(r, c);
      }
    }
  }

  return count;
};
