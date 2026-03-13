/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);

  const min1 = nums[0];
  const min2 = nums[1];
  const max1 = nums[nums.length - 1];
  const max2 = nums[nums.length - 2];

  return max1 * max2 - min1 * min2;
};
