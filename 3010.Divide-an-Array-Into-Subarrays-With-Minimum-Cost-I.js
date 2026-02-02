/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  const n = nums.length;
  let answer = Infinity;
  let secondMin = nums[1];

  for (let j = 2; j < n; j++) {
    answer = Math.min(answer, nums[0] + secondMin + nums[j]);

    secondMin = Math.min(secondMin, nums[j]);
  }

  return answer;
};
