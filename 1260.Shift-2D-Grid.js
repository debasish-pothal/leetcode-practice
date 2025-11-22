/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const total = rows * cols;

  const valToPos = (v) => {
    return [Math.floor(v / cols), v % cols];
  };

  const posToVal = (r, c) => {
    return r * cols + c;
  };

  const result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const newVal = (posToVal(i, j) + k) % total;
      const [newR, newC] = valToPos(newVal);

      result[newR][newC] = grid[i][j];
    }
  }

  return result;
};
