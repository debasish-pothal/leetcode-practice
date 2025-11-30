/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  const reqSum = (n * (n + 1)) / 2;
  const currSum = nums.reduce((a, c) => a + c, 0);

  return reqSum - currSum;
};
