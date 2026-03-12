/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let total = 0;

  while (n > 1) {
    const matches = Math.floor(n / 2);
    const rem = n % 2;

    total += matches;

    n = matches + rem;
  }

  return total;
};
