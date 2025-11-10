/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  cost.push(0);

  for (let i = cost.length - 3; i >= 0; i--) {
    cost[i] += Math.min(cost[i + 2], cost[i + 1]);
  }

  return Math.min(cost[0], cost[1]);
};
