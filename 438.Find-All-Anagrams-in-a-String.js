/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pMap = new Map();
  const sMap = new Map();

  for (const c of p) {
    pMap.set(c, (pMap.get(c) || 0) + 1);
  }

  const isSameMap = (map1, map2) => {
    if (map1.size !== map2.size) return false;

    for (const [key, val] of map1) {
      if (!map2.has(key)) return false;
      if (val !== map2.get(key)) return false;
    }

    return true;
  };

  let left = 0;
  let right = p.length - 1;
  const result = [];

  for (let i = left; i <= right; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  while (right < s.length) {
    if (isSameMap(pMap, sMap)) {
      result.push(left);
    }

    const leftChar = s[left]; // delete left
    left += 1;
    right += 1;
    const rightChar = s[right]; // add right

    sMap.set(leftChar, sMap.get(leftChar) - 1);
    sMap.set(rightChar, (sMap.get(rightChar) || 0) + 1);

    if (sMap.get(leftChar) <= 0) sMap.delete(leftChar);
  }

  return result;
};
