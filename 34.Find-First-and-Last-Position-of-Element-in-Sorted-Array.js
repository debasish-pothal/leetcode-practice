/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      let left = mid;
      let right = mid;

      while (nums[left - 1] === target) left -= 1;
      while (nums[right + 1] === target) right += 1;

      return [left, right];
    }
  }

  return [-1, -1];
};
