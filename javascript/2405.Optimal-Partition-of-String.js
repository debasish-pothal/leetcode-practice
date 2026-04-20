/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let set = new Set();
  let count = 1;

  for (const c of s) {
    if (set.has(c)) {
      count += 1;
      set = new Set();
      set.add(c);
    } else {
      set.add(c);
    }
  }

  return count;
};
