/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let result = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let length = 0;

      while (set.has(num)) {
        num += 1;
        length += 1;
      }

      result = Math.max(result, length);
    }
  }

  return result;
};
