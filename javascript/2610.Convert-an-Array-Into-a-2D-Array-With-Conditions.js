/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const result = [];
  const freq = new Map();

  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);

    const row = freq.get(nums[i]) - 1;

    if (!result[row]) result[row] = [];
    result[row].push(nums[i]);
  }

  return result;
};
