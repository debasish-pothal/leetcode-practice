/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const keys = pattern.split("");
  const values = s.split(" ");

  if (keys.length !== values.length) {
    return false;
  }

  const pMap = new Map();
  const sMap = new Map();

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = values[i];

    if (
      (pMap.has(key) && pMap.get(key) !== val) ||
      (sMap.has(val) && sMap.get(val) !== key)
    ) {
      return false;
    }

    pMap.set(key, val);
    sMap.set(val, key);
  }

  return true;
};
