/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const total = rows * cols;

  k %= total;

  const result = Array.from({ length: rows }, () => Array(cols));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c;
      const newIdx = (idx + k) % total;

      const newR = Math.floor(newIdx / cols);
      const newC = newIdx % cols;

      result[newR][newC] = grid[r][c];
    }
  }

  return result;
};
