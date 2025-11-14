/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let index = 0;

  while (index < haystack.length) {
    if (haystack[index] === needle[0]) {
      let p1 = index;
      let p2 = 0;

      while (p2 < needle.length && haystack[p1] === needle[p2]) {
        p1++;
        p2++;
      }

      if (p2 === needle.length) {
        return index;
      }
    }

    index++;
  }

  return -1;
};
