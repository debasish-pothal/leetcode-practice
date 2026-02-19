/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let result = 0;
  const groups = [];
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count += 1;
    } else {
      groups.push(count);
      count = 1;
    }
  }

  groups.push(count);

  for (let i = 1; i < groups.length; i++) {
    result += Math.min(groups[i - 1], groups[i]);
  }

  return result;
};
