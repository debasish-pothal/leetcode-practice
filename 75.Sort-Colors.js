/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const n = nums.length;
  // move 0 to start of array
  let index = n - 1;
  let zeroIndex = n - 1;

  while (index >= 0) {
    if (nums[index] !== 0) {
      [nums[index], nums[zeroIndex]] = [nums[zeroIndex], nums[index]];
      zeroIndex -= 1;
    }
    index -= 1;
  }

  // move 2 to end of array
  index = zeroIndex + 1;
  let twoIndex = zeroIndex + 1;

  while (index < n) {
    if (nums[index] !== 2) {
      [nums[index], nums[twoIndex]] = [nums[twoIndex], nums[index]];
      twoIndex += 1;
    }
    index += 1;
  }
};
