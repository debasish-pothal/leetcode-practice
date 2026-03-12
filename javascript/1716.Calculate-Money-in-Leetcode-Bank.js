/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let start = 1;
  let total = 0;

  while (n > 0) {
    let rem = n <= 7 ? n : 7;
    n = n - 7;
    let num = start;

    while (rem) {
      total += num;
      num += 1;
      rem -= 1;
    }

    start += 1;
  }

  return total;
};
