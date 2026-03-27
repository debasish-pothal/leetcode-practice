/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = new Map();
  let length = 0;

  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  for (const val of map.values()) {
    if (val % 2 === 0) {
      length += val;
    } else {
      length += val - 1;
    }
  }

  return length < s.length ? length + 1 : length;
};
