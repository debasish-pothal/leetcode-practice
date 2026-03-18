/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const seen = new Set();
  let missing;
  let duplicate;

  for (const num of nums) {
    if (seen.has(num)) {
      duplicate = num;
    }
    seen.add(num);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!seen.has(i)) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
};
