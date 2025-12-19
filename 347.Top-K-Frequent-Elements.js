/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const length = nums.length;
  const map = new Map();
  const temp = [];
  const result = [];

  for (const num of nums) map.set(num, (map.get(num) || 0) + 1);

  for (const [key, val] of map) {
    if (!temp[val]) temp[val] = [];

    temp[val].push(key);
  }

  for (let i = temp.length - 1; i >= 0 && result.length < k; i--) {
    if (temp[i]) result.push(...temp[i]);
  }

  return result;
};
