/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const rows = img.length;
  const cols = img[0].length;

  const result = [];

  for (let r = 0; r < rows; r++) {
    result[r] = Array(cols);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let total = 0;
      let count = 0;

      for (let i = r - 1; i <= r + 1; i++) {
        for (let j = c - 1; j <= c + 1; j++) {
          if (i < 0 || i >= rows || j < 0 || j >= cols) {
            continue;
          }

          total += img[i][j];
          count += 1;
        }
      }

      result[r][c] = Math.floor(total / count);
    }
  }

  return result;
};
