/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const set = new Set();
  let x = 0;
  let y = 0;
  set.add(`${x}-${y}`);

  const dir = {
    N: [0, 1],
    S: [0, -1],
    E: [1, 0],
    W: [-1, 0],
  };

  for (const p of path) {
    const [dirX, dirY] = dir[p];

    x += dirX;
    y += dirY;
    const key = `${x}-${y}`;

    if (set.has(key)) {
      return true;
    }

    set.add(key);
  }

  return false;
};
