/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let length = k;

  for (const num of nums) {
    if (num === 1) {
      if (length < k) {
        return false;
      } else {
        length = 0;
      }
    } else {
      length += 1;
    }
  }

  return true;
};
