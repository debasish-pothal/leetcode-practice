/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */
var maximumProfit = function (prices, k) {
  if (prices.length === 0 || k === 0) return 0;

  const dpFree = Array(k + 1).fill(-Infinity);
  const dpLong = Array(k + 1).fill(-Infinity);
  const dpShort = Array(k + 1).fill(-Infinity);

  dpFree[0] = 0;

  for (const price of prices) {
    const prevFree = [...dpFree];
    const prevLong = [...dpLong];
    const prevShort = [...dpShort];

    for (let t = 0; t <= k; t++) {
      dpFree[t] = prevFree[t];
      dpLong[t] = Math.max(prevLong[t], prevFree[t] - price);
      dpShort[t] = Math.max(prevShort[t], prevFree[t] + price);

      if (t > 0) {
        dpFree[t] = Math.max(
          dpFree[t],
          prevLong[t - 1] + price,
          prevShort[t - 1] - price
        );
      }
    }
  }

  return Math.max(...dpFree);
};
