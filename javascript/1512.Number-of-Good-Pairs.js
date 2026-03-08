/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = new Map();
  let count = 0;

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const val of map.values()) {
    if (val > 1) {
      count += (val * (val - 1)) / 2;
    }
  }

  return count;
};
