/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;

  const bin = n.toString(2);

  return bin.split("1").length - 1 === 1;
};
