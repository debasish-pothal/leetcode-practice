/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const map = new Map();

  for (const num of target) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of arr) {
    map.set(num, map.get(num) - 1);

    if (map.get(num) === 0) map.delete(num);
  }

  return map.size === 0;
};
