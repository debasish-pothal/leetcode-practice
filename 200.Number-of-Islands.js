/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let count = 0;

  const traverse = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
      return;
    }

    grid[r][c] = "0";

    traverse(r - 1, c);
    traverse(r + 1, c);
    traverse(r, c - 1);
    traverse(r, c + 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count += 1;
        traverse(r, c);
      }
    }
  }

  return count;
};
