/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const total = nums1.length + nums2.length;
  const mid = Math.floor(total / 2);

  let i = 0;
  let j = 0;

  let curr = 0;
  let prev = 0;

  for (let k = 0; k <= mid; k++) {
    prev = curr;

    if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
      curr = nums1[i];
      i += 1;
    } else {
      curr = nums2[j];
      j += 1;
    }
  }

  return total % 2 === 0 ? (prev + curr) / 2 : curr;
};
