/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let times = 0;
  let freshOranges = 0;
  const queue = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        freshOranges += 1;
      }

      if (grid[r][c] === 2) {
        queue.push([r, c]);
      }
    }
  }

  while (freshOranges && queue.length) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const [r, c] = queue.shift();

      for (const [dr, dc] of directions) {
        const row = r + dr;
        const col = c + dc;

        if (
          row < 0 ||
          col < 0 ||
          row >= rows ||
          col >= cols ||
          grid[row][col] !== 1
        ) {
          continue;
        }

        grid[row][col] = 2;
        freshOranges -= 1;
        queue.push([row, col]);
      }
    }

    times += 1;
  }

  return freshOranges ? -1 : times;
};
