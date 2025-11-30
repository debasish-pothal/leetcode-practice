/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  const total = nums.reduce((a, c) => a + c, 0);
  let rem = total % p;

  if (rem === 0) {
    return 0;
  }

  let result = nums.length;
  let current_sum = 0;
  const map = new Map();
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    current_sum = (current_sum + nums[i]) % p;
    const prefix = (current_sum - rem + p) % p;

    if (map.has(prefix)) {
      const length = i - map.get(prefix);
      result = Math.min(result, length);
    }

    map.set(current_sum, i);
  }

  return result === nums.length ? -1 : result;
};
