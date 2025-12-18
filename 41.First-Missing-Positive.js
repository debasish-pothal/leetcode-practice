/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const sortedNums = nums.filter((a) => a > 0).sort((a, b) => a - b);

  if (!sortedNums.length) return 1;

  const start = 1;
  const end = sortedNums[sortedNums.length - 1];

  for (let i = start; i <= end; i++) {
    if (!sortedNums.includes(i)) return i;
  }

  return end + 1;
};
