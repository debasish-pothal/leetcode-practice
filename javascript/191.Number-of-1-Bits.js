/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  for (let i = 0; i < 32; i++) {
    let mask = 1 << i;

    if ((n & mask) !== 0) {
      count++;
    }
  }

  return count;
};
