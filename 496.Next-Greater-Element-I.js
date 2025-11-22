/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const n = nums1.length;
  const result = new Array(n).fill(-1);
  const stack = [];
  const map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(nums1[i], i);
  }

  for (const num of nums2) {
    while (stack[stack.length - 1] < num) {
      const top = stack.pop();
      const idx = map.get(top);
      result[idx] = num;
    }

    if (map.has(num)) {
      stack.push(num);
    }
  }

  return result;
};
