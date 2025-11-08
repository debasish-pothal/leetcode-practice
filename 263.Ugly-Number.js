/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) {
    return false;
  }

  for (const d of [2, 3, 5]) {
    while (n % d === 0) {
      n = Math.floor(n / d);
    }
  }

  return n === 1;
};
