/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let i = 0;

  while (i <= bits.length - 2) {
    if (bits[i] === 1) {
      i += 2;
    } else {
      i += 1;
    }
  }

  return i + 1 === bits.length;
};
