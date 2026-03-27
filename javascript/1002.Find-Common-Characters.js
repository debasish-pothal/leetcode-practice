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
    const tempMap = createMap(words[i]);

    for (const key of [...currMap.keys()]) {
      const val = tempMap.get(key) || 0;

      if (val === 0) {
        currMap.delete(key);
      } else {
        currMap.set(key, Math.min(currMap.get(key), val));
      }
    }
  }

  for (const [key, val] of currMap) {
    result += key.repeat(val);
  }

  return result.split("");
};
