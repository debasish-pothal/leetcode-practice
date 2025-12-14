/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = new Map();

  for (const n of arr) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  let count = 0;

  for (const c of arr) {
    if (map.get(c) != 1) continue;

    count += 1;

    if (count === k) return c;
  }

  return "";
};
