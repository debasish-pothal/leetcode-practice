/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  neg = 0;

  for (const num of nums) {
    if (num === 0) {
      return 0;
    }

    if (num < 0) {
      neg += 1;
    }
  }

  if (neg % 2 == 0) {
    return 1;
  }

  return -1;
};
