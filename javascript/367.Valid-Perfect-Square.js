/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let start = 1;
  let end = num;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midsqr = mid ** 2;

    if (midsqr < num) {
      start = mid + 1;
    } else if (midsqr > num) {
      end = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};
