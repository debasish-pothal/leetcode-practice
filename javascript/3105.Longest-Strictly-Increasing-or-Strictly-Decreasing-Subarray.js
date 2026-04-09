/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let max_inc = 1;
  let max_dec = 1;
  let cur_inc = 1;
  let cur_dec = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      cur_inc += 1;
      cur_dec = 1;
    } else if (nums[i] < nums[i - 1]) {
      cur_dec += 1;
      cur_inc = 1;
    } else {
      cur_dec = 1;
      cur_inc = 1;
    }

    max_inc = Math.max(max_inc, cur_inc);
    max_dec = Math.max(max_dec, cur_dec);
  }

  return Math.max(max_inc, max_dec);
};
