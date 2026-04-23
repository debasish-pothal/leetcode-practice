/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let result = 0;
  let zeros = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros += 1;
      result += zeros;
    } else {
      zeros = 0;
    }
  }

  return result;
};
