/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const n = nums.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      count += 1;
    }
  }

  return count <= 1; // 0 means sorted, 1 means rotated sorted, more than 1 means invalid
};
