/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordLength = words[0].length;
  const windowLength = words.length * wordLength;
  const result = [];

  if (windowLength > s.length) {
    return result;
  }

  const createWordMap = (w) => {
    const map = new Map();

    for (const c of w) {
      map.set(c, (map.get(c) || 0) + 1);
    }

    return map;
  };

  const compareMaps = (map1, map2) => {
    if (map1.size !== map2.size) return false;

    for (const [key, value] of map1) {
      if (!map2.has(key)) {
        return false;
      }

      if (map2.get(key) !== value) {
        return false;
      }
    }

    return true;
  };

  const wordsMap = createWordMap(words);

  let start = 0;
  let end = windowLength - 1;

  while (end < s.length) {
    const sWords = [];

    for (let i = start; i <= end; i += wordLength) {
      sWords.push(s.substring(i, i + wordLength));
    }

    const currentMap = createWordMap(sWords);

    if (compareMaps(wordsMap, currentMap)) {
      result.push(start);
    }

    start += 1;
    end += 1;
  }

  return result;
};
