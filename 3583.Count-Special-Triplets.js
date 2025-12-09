/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function (nums) {
  const MOD = 1e9 + 7;

  const rightFreq = new Map();
  const leftFreq = new Map();
  let ans = 0;

  for (const num of nums) {
    rightFreq.set(num, (rightFreq.get(num) || 0) + 1);
  }

  for (const num of nums) {
    // update right map
    rightFreq.set(num, rightFreq.get(num) - 1);
    if (rightFreq.get(num) <= 0) rightFreq.delete(num);

    // process num
    const needed = 2 * num;
    const leftCount = leftFreq.get(needed) || 0;
    const rightCount = rightFreq.get(needed) || 0;
    ans = (ans + leftCount * rightCount) % MOD;

    // update left map
    leftFreq.set(num, (leftFreq.get(num) || 0) + 1);
  }

  return ans;
};
