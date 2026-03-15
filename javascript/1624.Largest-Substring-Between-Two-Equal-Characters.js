/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const first_index = new Map();
  let length = -1;

  for (let i = 0; i < s.length; i++) {
    if (!first_index.has(s[i])) {
      first_index.set(s[i], i);
    } else {
      const current_length = i - first_index.get(s[i]) - 1;
      length = Math.max(length, current_length);
    }
  }

  return length;
};
