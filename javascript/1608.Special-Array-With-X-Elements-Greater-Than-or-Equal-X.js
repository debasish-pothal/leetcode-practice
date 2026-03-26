/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b);

  let i = 0;
  let prev = -1;
  let total_right = nums.length;

  while (i < nums.length) {
    if (
      nums[i] === total_right ||
      (prev < total_right && total_right < nums[i])
    ) {
      return total_right;
    }

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i += 1;
    }

    prev = nums[i];
    i += 1;
    total_right = nums.length - i;
  }

  return -1;
};
