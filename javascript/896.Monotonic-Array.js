/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let isInc = true;
  let isDec = true;
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];

    if (curr < prev) {
      isInc = false;
    }

    if (curr > prev) {
      isDec = false;
    }

    if (!isInc && !isDec) {
      return false;
    }

    prev = curr;
  }

  return true;
};
