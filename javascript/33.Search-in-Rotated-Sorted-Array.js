/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    const m = nums[mid];
    const l = nums[left];
    const r = nums[right];

    if (m === target) {
      return mid;
    }

    if (l <= m) {
      // left
      if (l <= target && target < m) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right
      if (m < target && target <= r) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
