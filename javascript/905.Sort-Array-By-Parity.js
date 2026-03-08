/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  even = 0;
  odd = nums.length - 1;

  while (even < odd) {
    if (nums[even] % 2 === 0) {
      even += 1;
    } else if (nums[odd] % 2 !== 0) {
      odd -= 1;
    } else {
      [nums[even], nums[odd]] = [nums[odd], nums[even]];
      even += 1;
      odd -= 1;
    }
  }

  return nums;
};
