/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let start = 0;
  let end = rows * cols - 1;

  while (start <= end) {
    const mid = start + (end - start);
    const midVal = matrix[Math.floor(end / cols)][end % cols];

    if (midVal > target) {
      end = mid - 1;
    } else if (midVal < target) {
      start = mid + 1;
    } else {
      return true;
    }
  }

  return false;
};
