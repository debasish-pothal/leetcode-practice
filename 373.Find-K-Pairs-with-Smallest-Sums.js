/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  if (!nums1.length || !nums2.length) return [];

  const map = new Map();
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const key = nums1[i] + nums2[j];
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push([nums1[i], nums2[j]]);
    }
  }

  const sortedKeys = [...map.keys()].sort((a, b) => a - b);

  for (const key of sortedKeys) {
    const pairs = map.get(key);

    for (const pair of pairs) {
      if (result.length === k) {
        return result;
      }

      result.push(pair);
    }
  }

  return result;
};
