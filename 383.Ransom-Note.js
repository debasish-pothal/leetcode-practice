/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (const c of ransomNote) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  for (const c of magazine) {
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
    }

    if (map.get(c) <= 0) {
      map.delete(c);
    }
  }

  return map.size === 0;
};
