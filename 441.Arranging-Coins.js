/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let count = 0;
  let coin = 1;
  let inc = 2;

  while (coin <= n) {
    count += 1;
    coin += inc;
    inc += 1;
  }

  return count;
};
