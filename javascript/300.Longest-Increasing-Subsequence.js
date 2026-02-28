/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const result = [];

  for (const num of nums) {
    let left = 0;
    let right = result.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (result[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    result[left] = num;
  }

  return result.length;
};
