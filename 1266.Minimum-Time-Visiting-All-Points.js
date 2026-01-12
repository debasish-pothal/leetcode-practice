/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let time = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const curX = points[i][0];
    const curY = points[i][1];
    const tarX = points[i + 1][0];
    const tarY = points[i + 1][1];

    time += Math.max(Math.abs(tarX - curX), Math.abs(tarY - curY));
  }

  return time;
};
