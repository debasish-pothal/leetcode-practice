/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const result = [...prices];
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    while (stack.length && price <= prices[stack[stack.length - 1]]) {
      const idx = stack.pop();
      const diff = prices[idx] - price;
      result[idx] = diff;
    }

    stack.push(i);
  }

  return result;
};
