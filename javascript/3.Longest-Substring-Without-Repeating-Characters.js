/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let length = 0;
  let left = 0;
  const set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    }

    length = Math.max(length, right - left + 1);
    set.add(s[right]);
  }

  return length;
};
