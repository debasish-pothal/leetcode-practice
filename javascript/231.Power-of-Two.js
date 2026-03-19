/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  for (let i = 0; i <= 32; i++) {
    const x = Math.pow(2, i);

    if (x === n) {
      return true;
    }
  }

  return false;
};
