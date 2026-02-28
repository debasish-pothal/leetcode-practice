/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let result = 0;

  for (const num of nums) {
    if (num % 3) {
      result += 1;
    }
  }

  return result;
};
