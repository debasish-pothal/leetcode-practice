/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const result = [];

  const s1 = new Set(nums1);
  const s2 = new Set(nums2);

  for (const item of s1) {
    if (s2.has(item)) {
      result.push(item);
    }
  }

  return result;
};
