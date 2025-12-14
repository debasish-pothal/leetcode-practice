/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const cities = new Set();

  for (const [start, end] of paths) {
    cities.add(start);
  }

  for (const [start, end] of paths) {
    if (!cities.has(end)) {
      return end;
    }
  }
};
