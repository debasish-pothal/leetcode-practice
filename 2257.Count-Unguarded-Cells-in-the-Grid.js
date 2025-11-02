/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  // NOTE: 0 -> free, 1 -> guard, 2 -> wall, 3 -> guarded
  // 1: create m * n grid, filled with 0
  // 2: loop through each item in guards array and mark the grid with 1 for each position
  // 3: loop through each item in walls array and mark the grid with 2 for each position
  // 4: loop throuh each items in guards array and go to top, left, bottom and right cordinates unit the end row or column or till a wall and mark the grid with 3
  // 5: count the number of 0 and return

  const grid = Array.from({ length: m }, () => Array(n).fill(0));

  for (const [x, y] of guards) {
    grid[x][y] = 1;
  }

  for (const [x, y] of walls) {
    grid[x][y] = 2;
  }

  let directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  for (const [gx, gy] of guards) {
    for (const [dx, dy] of directions) {
      let x = gx + dx;
      let y = gy + dy;

      while (
        x >= 0 &&
        x < m &&
        y >= 0 &&
        y < n &&
        ![1, 2].includes(grid[x][y])
      ) {
        grid[x][y] = 3;
        x += dx;
        y += dy;
      }
    }
  }

  let unguarded = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        unguarded += 1;
      }
    }
  }

  return unguarded;
};
