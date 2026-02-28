/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let size = Infinity;
  let sum = 0;
  let left = 0;
  let right = 0;

  while (left < nums.length) {
    if (sum < target) {
      if (right === nums.length) break;

      sum += nums[right];
      right += 1;
    } else {
      const newSize = right - left;
      size = Math.min(size, newSize);

      sum -= nums[left];
      left += 1;
    }
  }

  return size === Infinity ? 0 : size;
};
