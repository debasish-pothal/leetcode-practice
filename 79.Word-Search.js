/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  const set = new Set();

  const dfs = (r, c, idx) => {
    if (idx === word.length) {
      return true;
    }

    const key = `${r}-${c}`;

    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      word[idx] !== board[r][c] ||
      set.has(key)
    ) {
      return false;
    }

    set.add(key);

    const res =
      dfs(r + 1, c, idx + 1) ||
      dfs(r - 1, c, idx + 1) ||
      dfs(r, c + 1, idx + 1) ||
      dfs(r, c - 1, idx + 1);

    set.delete(key);

    return res;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
};
