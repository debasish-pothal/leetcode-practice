/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 0;
  let end = x;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const midSqr = mid * mid;

    if (midSqr > x) {
      end = mid - 1;
    } else if (midSqr < x) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return end;
};
