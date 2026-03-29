/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const lucky = [];

  const rows_min = [];
  const cols_max = [];

  for (let r = 0; r < rows; r++) {
    rows_min.push(Math.min(...matrix[r]));
  }

  for (let c = 0; c < cols; c++) {
    let max = -Infinity;

    for (let r = 0; r < rows; r++) {
      max = Math.max(max, matrix[r][c]);
    }

    cols_max.push(max);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === rows_min[r] && matrix[r][c] === cols_max[c]) {
        lucky.push(matrix[r][c]);
      }
    }
  }

  return lucky;
};
