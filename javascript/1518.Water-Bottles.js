/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let total = numBottles;

  while (numBottles >= numExchange) {
    const exchange = Math.floor(numBottles / numExchange);
    const remaining = numBottles % numExchange;

    total += exchange;
    numBottles = exchange + remaining;
  }

  return total;
};
