/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const n = nums.length;
  const result = Array(n);
  result[0] = nums[0];

  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] + nums[i];
  }

  return result;
};
