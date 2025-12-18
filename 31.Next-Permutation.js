/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // find the first peak index
  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) i -= 1;

  // if the peak index exists,
  // find right element which is the small between all the big element to be swapped
  if (i >= 0) {
    let j = nums.length - 1;

    while (j >= 0 && nums[j] <= nums[i]) j -= 1;

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // reverse from index to the last index
  let left = i + 1;
  let right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left += 1;
    right -= 1;
  }
};
