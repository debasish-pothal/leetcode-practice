/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let max_sum = nums[0];
  let cur_sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      cur_sum += nums[i];
    } else {
      cur_sum = nums[i];
    }

    max_sum = Math.max(max_sum, cur_sum);
  }

  return max_sum;
};
