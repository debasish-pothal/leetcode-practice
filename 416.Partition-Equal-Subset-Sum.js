/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const total = nums.reduce((a, c) => a + c, 0);

  if (total % 2 !== 0) return false;

  const half = total / 2;
  const set = new Set();
  set.add(0);

  for (const num of nums) {
    const copyArr = Array.from(set);

    for (const copyNum of copyArr) {
      set.add(num + copyNum);
    }
  }

  return set.has(half);
};
