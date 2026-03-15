/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  const map = new Map();
  const length = words.length;

  const addToMap = (word) => {
    for (const c of word) {
      map.set(c, (map.get(c) || 0) + 1);
    }
  };

  for (const word of words) {
    addToMap(word);
  }

  for (const val of map.values()) {
    if (val % length) {
      return false;
    }
  }

  return true;
};
