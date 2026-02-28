/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (!points.length) return 0;

  points.sort((a, b) => a[0] - b[0]);

  let arrows = points.length;
  let prev = points[0];

  for (let i = 1; i < points.length; i++) {
    const curr = points[i];

    if (curr[0] <= prev[1]) {
      arrows -= 1;
      prev = [curr[0], Math.min(prev[1], curr[1])];
    } else {
      prev = curr;
    }
  }

  return arrows;
};
