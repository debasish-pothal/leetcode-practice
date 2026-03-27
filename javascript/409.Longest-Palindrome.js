/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const set = new Set();
  let length = 0;

  for (const c of s) {
    if (set.has(c)) {
      length += 2;
      set.delete(c);
    } else {
      set.add(c);
    }
  }

  return length < s.length ? length + 1 : length;
};
