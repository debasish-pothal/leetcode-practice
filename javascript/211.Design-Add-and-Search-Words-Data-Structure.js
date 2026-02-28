/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

class WordDictionary {
  constructor() {
    this.root = {};
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let node = this.root;

    for (const c of word) {
      if (!node[c]) {
        node[c] = {};
      }

      node = node[c];
    }

    node.isEnd = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const dfs = (index, node) => {
      if (index === word.length) {
        return node.isEnd === true;
      }

      const c = word[index];

      if (c === ".") {
        for (const key in node) {
          if (key !== "isEnd" && dfs(index + 1, node[key])) {
            return true;
          }
        }

        return false;
      }

      if (!node[c]) {
        return false;
      }

      return dfs(index + 1, node[c]);
    };

    return dfs(0, this.root);
  }
}
