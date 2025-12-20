/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const rows = strs.length;
  const cols = strs[0].length;
  let count = 0;

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows - 1; r++) {
      if (strs[r][c] > strs[r + 1][c]) {
        count += 1;
        break;
      }
    }
  }

  return count;
};
