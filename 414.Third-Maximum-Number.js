/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let third = -Infinity;
  let second = -Infinity;
  let first = -Infinity;

  for (const num of nums) {
    if (num === first || num === second || num === third) continue;

    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }

  return third === -Infinity ? first : third;
};
