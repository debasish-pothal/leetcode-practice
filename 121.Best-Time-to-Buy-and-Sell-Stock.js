/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyPrice = Infinity;
  let profit = -Infinity;

  for (const price of prices) {
    buyPrice = Math.min(buyPrice, price);
    profit = Math.max(profit, price - buyPrice);
  }

  return profit;
};
