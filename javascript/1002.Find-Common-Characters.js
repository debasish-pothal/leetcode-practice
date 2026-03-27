/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = "";

  const createMap = (word) => {
    const map = new Map();

    for (const c of word) {
      map.set(c, (map.get(c) || 0) + 1);
    }

    return map;
  };

  const currMap = createMap(words[0]);

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const tempMap = createMap(words[i]);

    for (const [key, val] of currMap) {
      if (!tempMap.has(key)) {
        currMap.delete(key);
      }
    }

    for (const [key, val] of tempMap) {
      if (currMap.has(key)) {
        currMap.set(key, Math.min(currMap.get(key), val));
      }
    }
  }

  for (const [key, val] of currMap) {
    result += key.repeat(val);
  }

  return result.split("");
};
