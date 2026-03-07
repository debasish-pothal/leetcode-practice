/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    const c = String.fromCharCode(((columnNumber - 1) % 26) + 65);
    result = c + result;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return result;
};
