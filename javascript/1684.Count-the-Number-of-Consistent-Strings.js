/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0;
  const allowed_set = new Set(allowed);

  const isConsistentSet = (word) => {
    for (const ch of word) {
      if (!allowed_set.has(ch)) return false;
    }

    return true;
  };

  for (const word of words) {
    if (isConsistentSet(word)) {
      count += 1;
    }
  }

  return count;
};
