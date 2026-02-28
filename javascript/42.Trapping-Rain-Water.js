/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    const leftH = height[left];
    const rightH = height[right];

    if (leftH < rightH) {
      leftMax = Math.max(leftMax, leftH);
      water += leftMax - leftH;
      left += 1;
    } else {
      rightMax = Math.max(rightMax, rightH);
      water += rightMax - rightH;
      right -= 1;
    }
  }

  return water;
};
