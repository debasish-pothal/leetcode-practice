/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const max = Math.pow(2, 31);
  const min = Math.pow(-2, 31);
  let num = 0;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  while (x) {
    const rem = x % 10;
    x = Math.floor(x / 10);

    num = 10 * num + rem;

    if (num <= min || num >= max) {
      return 0;
    }
  }

  return sign * num;
};
