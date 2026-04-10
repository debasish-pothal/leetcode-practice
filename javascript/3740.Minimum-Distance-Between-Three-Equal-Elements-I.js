/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
  const map = new Map();
  let min_distance = Infinity;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], [...(map.get(nums[i]) || []), i]);
  }

  for (const indices of map.values()) {
    if (indices.length >= 3) {
      for (let t = 0; t <= indices.length - 3; t++) {
        const i = indices[t];
        const j = indices[t + 1];
        const k = indices[t + 2];

        const cur_distance =
          Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i);
        min_distance = Math.min(min_distance, cur_distance);
      }
    }
  }

  return min_distance === Infinity ? -1 : min_distance;
};
