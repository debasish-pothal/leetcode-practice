/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function (n, buildings) {
  let count = 0;

  for (let i = 0; i < buildings.length; i++) {
    let [x, y] = buildings[i];

    let hasLeft = false;
    let hasRight = false;
    let hasAbove = false;
    let hasBelow = false;

    for (let j = 0; j < buildings.length; j++) {
      if (i === j) continue;

      const [x2, y2] = buildings[j];

      if (y === y2 && x > x2) hasLeft = true;
      if (y === y2 && x < x2) hasRight = true;
      if (x === x2 && y > y2) hasAbove = true;
      if (x === x2 && y < y2) hasBelow = true;
    }

    if (hasLeft && hasRight && hasAbove && hasBelow) {
      count += 1;
    }
  }

  return count;
};
