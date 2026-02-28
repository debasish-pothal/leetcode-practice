/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let result = 0;
  let prev_count = 0;
  let curr_count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      curr_count += 1;
    } else {
      result += Math.min(prev_count, curr_count);
      prev_count = curr_count;
      curr_count = 1;
    }
  }

  result += Math.min(prev_count, curr_count);

  return result;
};
