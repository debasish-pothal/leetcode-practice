/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const index_map = new Map();
  let length = -1;

  for (let i = 0; i < s.length; i++) {
    if (!index_map.has(s[i])) {
      index_map.set(s[i], []);
    }

    index_map.get(s[i]).push(i);
  }

  for (const [key, val] of index_map) {
    if (val.length <= 1) {
      continue;
    }

    const current_length = val[val.length - 1] - val[0] - 1;
    length = Math.max(length, current_length);
  }

  return length;
};
