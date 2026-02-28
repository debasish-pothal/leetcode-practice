/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";
  let cary = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || cary) {
    const sum = cary + (a[i] ? +a[i] : 0) + (b[j] ? +b[j] : 0);
    result = (sum % 2) + result;
    cary = Math.floor(sum / 2);

    i -= 1;
    j -= 1;
  }

  return result;
};
