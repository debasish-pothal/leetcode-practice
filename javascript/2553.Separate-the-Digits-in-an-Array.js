/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  let str = "";

  for (const num of nums) {
    str += num;
  }

  return str.split("").map((s) => +s);
};
