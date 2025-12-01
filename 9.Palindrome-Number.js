/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }

  let num = 0;
  let copy = x;

  while (copy) {
    const rem = copy % 10;
    num = num * 10 + rem;
    copy = Math.floor(copy / 10);
  }

  return x === num;
};
