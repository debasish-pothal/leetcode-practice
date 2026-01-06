/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let degree = -Infinity;
  let result = Infinity;

  for (const [key, val] of map) {
    const firstIdx = nums.indexOf(key);
    const lastIdx = nums.lastIndexOf(key);

    if (val > degree) {
      degree = val;
      result = lastIdx - firstIdx + 1;
    } else if (val === degree) {
      result = Math.min(result, lastIdx - firstIdx + 1);
    }
  }

  return result;
};
