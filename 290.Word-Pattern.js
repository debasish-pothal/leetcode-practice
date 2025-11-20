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

  const map = new Map();
  const set = new Set();

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = values[i];

    if (map.has(key)) {
      if (map.get(key) !== value) {
        return false;
      }
    } else {
      if (set.has(value)) {
        return false;
      }

      map.set(key, value);
      set.add(value);
    }
  }

  return true;
};
