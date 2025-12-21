/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const ROWS = strs.length;
  const COLS = strs[0].length;
  let ans = 0;
  const cuts = Array(COLS - 1).fill(false);

  for (let j = 0; j < COLS; j++) {
    let canKeep = true;

    for (let i = 0; i < ROWS - 1; i++) {
      if (!cuts[i] && strs[i][j] > strs[i + 1][j]) {
        canKeep = false;
        break;
      }
    }

    if (!canKeep) {
      ans += 1;
      continue;
    }

    for (let i = 0; i < ROWS - 1; i++) {
      if (strs[i][j] < strs[i + 1][j]) {
        cuts[i] = true;
      }
    }
  }

  return ans;
};
