/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  let leftDiagIdx = 0;
  let rightDiagIdx = rows - 1;
  let sum = 0;

  while (leftDiagIdx < rows) {
    if (leftDiagIdx === rightDiagIdx) {
      sum += mat[leftDiagIdx][leftDiagIdx];
    } else {
      sum += mat[leftDiagIdx][leftDiagIdx] + mat[leftDiagIdx][rightDiagIdx];
    }

    leftDiagIdx += 1;
    rightDiagIdx -= 1;
  }

  return sum;
};
