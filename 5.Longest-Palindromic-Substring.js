/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let start = 0;
  let max_length = 1;

  const expandFromMiddle = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const current_length = right - left + 1;

      if (current_length > max_length) {
        max_length = current_length;
        start = left;
      }

      left -= 1;
      right += 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandFromMiddle(i - 1, i + 1); // odd length
    expandFromMiddle(i, i + 1); // even length
  }

  return s.substring(start, start + max_length);
};
