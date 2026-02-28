/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  let zeroIndex = 0;
  let index = 0;

  while (index < nums.length) {
    if (nums[index] !== 0) {
      [nums[index], nums[zeroIndex]] = [nums[zeroIndex], nums[index]];
      zeroIndex += 1;
    }

    index += 1;
  }

  return nums;
};
