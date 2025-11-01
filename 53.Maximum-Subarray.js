/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum_till_index = nums[0];
  let max_sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum_till_index = Math.max(nums[i], nums[i] + sum_till_index);
    max_sum = Math.max(max_sum, sum_till_index);
  }

  return max_sum;
};
