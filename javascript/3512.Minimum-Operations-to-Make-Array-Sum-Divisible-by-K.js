/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const sum = nums.reduce((a, c) => a + c, 0);

  return sum % k;
};
