/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  even = nums.filter((n) => n % 2 === 0);
  odd = nums.filter((n) => n % 2 !== 0);

  return [...even, ...odd];
};
