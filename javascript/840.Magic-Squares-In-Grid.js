/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const isMagicSqr = (r, c) => {
    const seen = new Set();

    for (let i = r; i < r + 3; i++) {
      for (let j = c; j < c + 3; j++) {
        const val = grid[i][j];

        if (val < 1 || val > 9 || seen.has(val)) return false;

        seen.add(val);
      }
    }

    const row1 = grid[r][c] + grid[r][c + 1] + grid[r][c + 2] === 15;
    const row2 =
      grid[r + 1][c] + grid[r + 1][c + 1] + grid[r + 1][c + 2] === 15;
    const row3 =
      grid[r + 2][c] + grid[r + 2][c + 1] + grid[r + 2][c + 2] === 15;

    const col1 = grid[r][c] + grid[r + 1][c] + grid[r + 2][c] === 15;
    const col2 =
      grid[r][c + 1] + grid[r + 1][c + 1] + grid[r + 2][c + 1] === 15;
    const col3 =
      grid[r][c + 2] + grid[r + 1][c + 2] + grid[r + 2][c + 2] === 15;

    const dia1 = grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] === 15;
    const dia2 = grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] === 15;

    return row1 && row2 && row3 && col1 && col2 && col3 && dia1 && dia2;
  };

  let count = 0;

  for (let r = 0; r < rows - 2; r++) {
    for (let c = 0; c < cols - 2; c++) {
      if (isMagicSqr(r, c)) {
        count += 1;
      }
    }
  }

  return count;
};
