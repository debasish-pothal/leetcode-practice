/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let count = 0;
  const rows = mat.length;
  const cols = mat[0].length;
  const row_sum = Array(rows).fill(0);
  const col_sum = Array(cols).fill(0);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 1) {
        row_sum[r] += 1;
        col_sum[c] += 1;
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 1 && row_sum[r] === 1 && col_sum[c] === 1) {
        count += 1;
      }
    }
  }

  return count;
};
