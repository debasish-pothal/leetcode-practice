/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function (n, buildings) {
  let count = 0;

  // group rows, cols
  const rows = new Map();
  const cols = new Map();

  for (const [x, y] of buildings) {
    if (!rows.has(y)) rows.set(y, []);
    if (!cols.has(x)) cols.set(x, []);

    rows.get(y).push(x);
    cols.get(x).push(y);
  }

  // sort to get min and max value
  for (const arr of rows.values()) arr.sort((a, b) => a - b);
  for (const arr of cols.values()) arr.sort((a, b) => a - b);

  // process the buildings
  for (const [x, y] of buildings) {
    const row = rows.get(y);
    const col = cols.get(x);

    const minX = row[0];
    const maxX = row[row.length - 1];
    const minY = col[0];
    const maxY = col[col.length - 1];

    const hasLeft = minX < x;
    const hasRight = maxX > x;
    const hasBelow = minY < y;
    const hasAbove = maxY > y;

    if (hasLeft && hasRight && hasBelow && hasAbove) count += 1;
  }

  return count;
};
