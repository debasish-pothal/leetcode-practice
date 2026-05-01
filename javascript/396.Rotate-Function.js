/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  const n = nums.length;
  let totalSum = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    totalSum += nums[i];
    temp += i * nums[i];
  }

  let maxVal = temp;

  for (let k = 1; k < n; k++) {
    temp = temp + totalSum - n * nums[n - k];
    maxVal = Math.max(maxVal, temp);
  }

  return maxVal;
};
