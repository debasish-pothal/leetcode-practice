/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
  if (k % 2 === 0 || k % 5 === 0) {
    return -1;
  }

  let remainder = 0;
  let length = 0;

  while (true) {
    length += 1;
    remainder = (remainder * 10 + 1) % k;

    if (remainder === 0) {
      return length;
    }
  }
};
