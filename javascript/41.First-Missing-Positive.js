/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) nums[i] = 0;
  }

  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (index < 0 || index >= n) continue;

    if (nums[index] > 0) {
      nums[index] = -1 * nums[index];
    } else if (nums[index] === 0) {
      nums[index] = -1 * (n + 1);
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] >= 0) return i + 1;
  }

  return n + 1;
};
