/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (k === 0 || !prices.length) return 0;

  const buy = new Array(k + 1).fill(Infinity);
  const sell = new Array(k + 1).fill(0);

  for (const price of prices) {
    for (let i = 1; i <= k; i++) {
      buy[i] = Math.min(buy[i], price - sell[i - 1]);
      sell[i] = Math.max(sell[i], price - buy[i]);
    }
  }

  return sell[k];
};
