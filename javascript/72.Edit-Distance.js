/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const rows = word1.length;
  const cols = word2.length;

  const grid = [];

  for (let r = 0; r <= rows; r++) {
    grid[r] = [r];
  }

  for (let c = 0; c <= cols; c++) {
    grid[0][c] = c;
  }

  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      if (word1[r - 1] === word2[c - 1]) {
        grid[r][c] = grid[r - 1][c - 1];
      } else {
        grid[r][c] =
          1 + Math.min(grid[r - 1][c], grid[r][c - 1], grid[r - 1][c - 1]);
      }
    }
  }

  return grid[rows][cols];
};
