/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  let index = Infinity;

  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (value === 1) {
      index = Math.min(index, s.indexOf(key));
    }
  }

  return index === Infinity ? -1 : index;
};
