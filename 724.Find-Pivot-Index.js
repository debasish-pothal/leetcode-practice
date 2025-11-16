/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let prefix = 0;

  for (let i = 0; i < nums.length; i++) {
    if (prefix === total - prefix - nums[i]) {
      return i;
    }

    prefix += nums[i];
  }

  return -1;
};
