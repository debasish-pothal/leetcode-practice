/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  const isPalindrome = (start, end) => {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }

      start += 1;
      end -= 1;
    }

    return true;
  };

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(left, right - 1) || isPalindrome(left + 1, right);
    }

    left += 1;
    right -= 1;
  }

  return true;
};
