/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;
  let far_idx = 0;
  let cur_idx = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    far_idx = Math.max(far_idx, i + nums[i]);

    if (i === cur_idx) {
      cur_idx = far_idx;
      jumps += 1;
    }
  }

  return jumps;
};
