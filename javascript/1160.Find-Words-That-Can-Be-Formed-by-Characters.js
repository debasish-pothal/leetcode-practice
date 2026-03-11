/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let length = 0;

  const createMap = (word) => {
    const map = new Map();

    for (const c of word) {
      map.set(c, (map.get(c) || 0) + 1);
    }

    return map;
  };

  const hasAllLetters = (wordMap) => {
    for (const [key, val] of wordMap) {
      if (!charMap.has(key) || charMap.get(key) < val) {
        return false;
      }
    }

    return true;
  };

  const charMap = createMap(chars);

  for (const word of words) {
    if (hasAllLetters(createMap(word))) {
      length += word.length;
    }
  }

  return length;
};
