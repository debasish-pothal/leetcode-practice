/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let land = 0;
  let border_land = 0;

  const dfs = (r, c) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      grid[r][c] === 0 ||
      visited.has(`${r}-${c}`)
    ) {
      return 0;
    }

    visited.add(`${r}-${c}`);
    const count =
      1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);

    return count;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      land += grid[r][c];

      if (
        grid[r][c] === 1 &&
        ([0, rows - 1].includes(r) || [0, cols - 1].includes(c)) &&
        !visited.has(`${r}-${c}`)
      ) {
        border_land += dfs(r, c);
      }
    }
  }

  return land - border_land;
};
