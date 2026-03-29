/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const lucky = [];

  const isLucky = (num, row, col) => {
    const min = Math.min(...matrix[row]);
    let max = -Infinity;

    for (let r = 0; r < matrix.length; r++) {
      max = Math.max(max, matrix[r][col]);
    }

    return num === min && num === max;
  };

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (isLucky(matrix[r][c], r, c)) {
        lucky.push(matrix[r][c]);
      }
    }
  }

  return lucky;
};
