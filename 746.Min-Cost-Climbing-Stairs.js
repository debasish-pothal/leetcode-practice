/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let last = 0;
  let prev_last = cost[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    cost[i] = Math.min(cost[i] + last, cost[i] + prev_last);
    last = cost[i + 1];
    prev_last = cost[i];
  }

  return Math.min(cost[0], cost[1]);
};
