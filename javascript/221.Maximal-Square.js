/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const cache = new Map();

  const helper = (row, col) => {
    if (row >= rows || col >= cols) {
      return 0;
    }

    const key = `${row}-${col}`;

    if (!cache.has(key)) {
      const right = helper(row, col + 1);
      const bottom = helper(row + 1, col);
      const diag = helper(row + 1, col + 1);

      cache.set(key, 0);

      if (matrix[row][col] === "1") {
        cache.set(key, 1 + Math.min(right, bottom, diag));
      }
    }

    return cache.get(key);
  };

  helper(0, 0);

  let max = 0;

  for (const [key, val] of cache) {
    max = Math.max(max, val);
  }

  return Math.pow(max, 2);
};
