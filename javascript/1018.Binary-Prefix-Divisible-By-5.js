/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  let value = 0;
  const result = [];

  for (const num of nums) {
    value = (value * 2 + num) % 5;

    result.push(value === 0);
  }

  return result;
};
