/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let seen = new Set();
  let count = 1;

  for (const c of s) {
    if (seen.has(c)) {
      count += 1;
      seen = new Set();
    }

    seen.add(c);
  }

  return count;
};
