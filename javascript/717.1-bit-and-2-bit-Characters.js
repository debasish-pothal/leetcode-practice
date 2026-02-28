/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let count = 0;
  let i = bits.length - 2;

  while (i >= 0 && bits[i] === 1) {
    count += 1;
    i -= 1;
  }

  return count % 2 === 0;
};
