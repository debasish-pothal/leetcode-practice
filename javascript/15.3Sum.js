/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length;
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const num = nums[i];
    const target = -1 * num;

    let start = i + 1;
    let end = n - 1;

    while (start < end) {
      const sum = nums[start] + nums[end];

      if (sum > target) {
        end -= 1;
      } else if (sum < target) {
        start += 1;
      } else {
        result.push([num, nums[start], nums[end]]);

        start += 1;
        end -= 1;

        while (start < end && nums[start] === nums[start - 1]) start += 1;
        while (start < end && nums[end] === nums[end + 1]) end -= 1;
      }
    }
  }

  return result;
};
