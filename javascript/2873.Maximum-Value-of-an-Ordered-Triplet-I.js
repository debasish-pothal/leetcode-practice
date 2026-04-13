/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  let result = 0;
  const n = nums.length;
  let left = nums[0];

  for (let j = 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      result = Math.max(result, (left - nums[j]) * nums[k]);
    }

    left = Math.max(left, nums[j]);
  }

  return result;
};
