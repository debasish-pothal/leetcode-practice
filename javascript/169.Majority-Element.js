/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let result = nums[0];

  for (const num of nums) {
    if (count === 0) {
      result = num;
    }

    if (result !== num) {
      count -= 1;
    } else {
      count += 1;
    }
  }

  return result;
};
