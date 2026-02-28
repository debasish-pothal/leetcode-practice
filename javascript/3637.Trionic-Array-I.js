/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function (nums) {
  const n = nums.length;
  let p = -1;
  let q = -1;
  let i = 0;

  if (n < 4) return false;

  while (i + 1 < n && nums[i + 1] > nums[i]) {
    i += 1;
  }

  p = i;

  while (i + 1 < n && nums[i + 1] < nums[i]) {
    i += 1;
  }

  q = i;

  while (i + 1 < n && nums[i + 1] > nums[i]) {
    i += 1;
  }

  return p > 0 && p < q && q < n - 1 && i === n - 1;
};
