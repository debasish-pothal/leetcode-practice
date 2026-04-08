/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  let count = 0;

  const isValid = (word1, word2) => {
    return word2.startsWith(word1) && word2.endsWith(word1);
  };

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isValid(words[i], words[j])) {
        count += 1;
      }
    }
  }

  return count;
};
