/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const cities = new Set();
  const pathMap = new Map();

  for (const [start, end] of paths) {
    pathMap.set(start, end);
    cities.add(start);
    cities.add(end);
  }

  for (const city of cities) {
    if (!pathMap.has(city)) {
      return city;
    }
  }
};
