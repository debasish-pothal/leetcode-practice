/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.length;
  const result = Array(n);
  let start = 0;
  let end = n - 1;
  let i = n - 1;

  while (i >= 0) {
    const startSqr = nums[start] ** 2;
    const endSqr = nums[end] ** 2;

    if (startSqr > endSqr) {
      result[i] = startSqr;
      start += 1;
    } else {
      result[i] = endSqr;
      end -= 1;
    }

    i -= 1;
  }

  return result;
};
