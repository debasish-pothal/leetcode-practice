/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }

  addWord(w) {
    let curr = this;

    for (const c of w) {
      if (!(c in curr.children)) {
        curr.children[c] = new TrieNode();
      }

      curr = curr.children[c];
    }

    curr.isWord = true;
  }
}

var findWords = function (board, words) {
  const root = new TrieNode();

  for (const word of words) {
    root.addWord(word);
  }

  const rows = board.length;
  const cols = board[0].length;
  const result = new Set();
  const visited = new Set();

  const dfs = (r, c, node, word) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      visited.has(`${r}-${c}`) ||
      !(board[r][c] in node.children)
    ) {
      return;
    }

    visited.add(`${r}-${c}`);

    node = node.children[board[r][c]];
    word += board[r][c];

    if (node.isWord) {
      result.add(word);
    }

    dfs(r + 1, c, node, word);
    dfs(r - 1, c, node, word);
    dfs(r, c + 1, node, word);
    dfs(r, c - 1, node, word);

    visited.delete(`${r}-${c}`);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dfs(r, c, root, "");
    }
  }

  return Array.from(result);
};
