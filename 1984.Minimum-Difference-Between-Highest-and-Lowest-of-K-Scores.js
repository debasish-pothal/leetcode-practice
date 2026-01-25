/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1) return 0;

  nums.sort((a, b) => a - b);
  let result = Infinity;

  for (let i = 0; i <= nums.length - k; i++) {
    const j = i + k - 1;

    result = Math.min(result, nums[j] - nums[i]);
  }

  return result;
};
