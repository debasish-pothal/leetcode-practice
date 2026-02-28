/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [];

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    let h = heights[i];

    while (stack.length && stack[stack.length - 1][1] > h) {
      const [index, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }

    stack.push([start, h]);
  }

  for (const [index, height] of stack) {
    maxArea = Math.max(maxArea, height * (heights.length - index));
  }

  return maxArea;
};
