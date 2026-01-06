/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const map = new Map();

  for (const [key, val] of items1) {
    map.set(key, (map.get(key) || 0) + val);
  }

  for (const [key, val] of items2) {
    map.set(key, (map.get(key) || 0) + val);
  }

  return [...map.entries()].sort((a, b) => a[0] - b[0]);
};
