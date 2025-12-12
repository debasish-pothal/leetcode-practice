/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  const leftMax = Array(n).fill(0);
  const rightMax = Array(n).fill(0);
  const minLR = Array(n);
  let water = 0;

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
  }

  for (let i = 0; i < n; i++) {
    minLR[i] = Math.min(leftMax[i], rightMax[i]);
  }

  for (let i = 0; i < n; i++) {
    water += Math.max(0, minLR[i] - height[i]);
  }

  return water;
};
