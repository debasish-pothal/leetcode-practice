/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let result = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current += 1;
        length += 1;
      }

      result = Math.max(result, length);
    }
  }

  return result;
};
