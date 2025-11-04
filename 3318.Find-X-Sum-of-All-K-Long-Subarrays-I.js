/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
  const n = nums.length;
  const result = [];

  for (let i = 0; i <= n - k; i++) {
    const freq = new Map();

    // count frequency
    for (let j = i; j < i + k; j++) {
      freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
    }

    // sort
    const sorted = Array.from(freq.entries()).sort((a, b) => {
      if (a[1] !== b[1]) {
        return b[1] - a[1];
      }

      return b[0] - a[0];
    });

    // keep only top x
    const topX = sorted.slice(0, x);

    // calculate sum and push
    let total = 0;

    for (const [num, count] of topX) {
      total += num * count;
    }

    result.push(total);
  }

  return result;
};
