/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const n = nums.length;
  const copy = [...nums, ...nums];

  let start = 0;

  while (start < n - 1) {
    if (copy[start] <= copy[start + 1]) {
      start += 1;
    } else {
      break;
    }
  }

  for (let i = start + 1; i < start + n; i++) {
    if (copy[i] > copy[i + 1]) {
      return false;
    }
  }

  return true;
};
