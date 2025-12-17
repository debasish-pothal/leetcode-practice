/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let idx1 = 0;
  let idx2 = 0;
  const result = [];

  while (idx1 < nums1.length && idx2 < nums2.length) {
    const [i1, v1] = nums1[idx1];
    const [i2, v2] = nums2[idx2];

    if (i1 === i2) {
      result.push([i1, v1 + v2]);
      idx1 += 1;
      idx2 += 1;
    } else if (i1 < i2) {
      result.push([i1, v1]);
      idx1 += 1;
    } else if (i1 > i2) {
      result.push([i2, v2]);
      idx2 += 1;
    }
  }

  while (idx1 < nums1.length) {
    result.push(nums1[idx1]);
    idx1 += 1;
  }

  while (idx2 < nums2.length) {
    result.push(nums2[idx2]);
    idx2 += 1;
  }

  return result;
};
