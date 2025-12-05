/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  const n = nums.length;
  let count = 0;
  const total = nums.reduce((a, c) => a + c, 0);
  let leftSum = 0;

  for (let i = 0; i < n - 1; i++) {
    leftSum += nums[i];
    const rightSum = total - leftSum;

    if ((leftSum - rightSum) % 2 === 0) {
      count += 1;
    }
  }

  return count;
};
