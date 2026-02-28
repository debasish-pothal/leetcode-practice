/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let count = 0;
  const cols = new Set();
  const negDiag = new Set(); // r - c
  const posDiag = new Set(); // r + c

  const backtrack = (r) => {
    if (r === n) {
      count += 1;
      return;
    }

    for (let c = 0; c < n; c++) {
      if (cols.has(c) || negDiag.has(r - c) || posDiag.has(r + c)) {
        continue;
      }

      cols.add(c);
      negDiag.add(r - c);
      posDiag.add(r + c);

      backtrack(r + 1);

      cols.delete(c);
      negDiag.delete(r - c);
      posDiag.delete(r + c);
    }
  };

  backtrack(0);

  return count;
};
