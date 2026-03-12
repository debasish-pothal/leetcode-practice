/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let start = 1;
  let total = 0;

  while (n > 0) {
    let days = Math.min(n, 7);

    for (let i = 0; i < days; i++) {
      total += start + i;
    }

    n -= 7;
    start += 1;
  }

  return total;
};
