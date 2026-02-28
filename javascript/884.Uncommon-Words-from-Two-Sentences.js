/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const s = `${s1} ${s2}`.split(" ");
  const sMap = new Map();
  const result = [];

  for (const c of s) {
    sMap.set(c, (sMap.get(c) || 0) + 1);
  }

  for (const [key, val] of sMap) {
    if (val === 1) result.push(key);
  }

  return result;
};
