/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  const result = [];

  result[0] = nums[0];
  result[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    result[i] = Math.max(result[i - 1], result[i - 2] + nums[i]);
  }

  return result[n - 1];
};
