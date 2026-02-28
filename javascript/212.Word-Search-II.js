/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}

var findWords = function (board, words) {
  const root = new TrieNode();

  for (const word of words) {
    let node = root;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }

      node = node.children[char];
    }

    node.word = word;
  }

  const rows = board.length;
  const cols = board[0].length;
  const result = [];

  const dfs = (r, c, node) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols) return;

    const char = board[r][c];
    const child = node.children[char];
    if (!child) return;

    if (child.word !== null) {
      result.push(child.word);
      child.word = null;
    }

    board[r][c] = "#";

    dfs(r + 1, c, child);
    dfs(r - 1, c, child);
    dfs(r, c + 1, child);
    dfs(r, c - 1, child);

    board[r][c] = char;

    if (Object.keys(child.children).length === 0) {
      delete node.children[char];
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (root.children[board[r][c]]) {
        dfs(r, c, root);
      }
    }
  }

  return result;
};
