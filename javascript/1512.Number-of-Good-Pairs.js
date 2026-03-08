/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (const [key, val] of map) {
    if (val > 1) {
      count += (val * (val - 1)) / 2;
    }
  }

  return count;
};
