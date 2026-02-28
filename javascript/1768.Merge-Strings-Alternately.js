/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const length = word1.length + word2.length;
  let index = 0;
  const result = [];

  while (index < length) {
    if (word1[index]) {
      result.push(word1[index]);
    }

    if (word2[index]) {
      result.push(word2[index]);
    }

    index += 1;
  }

  return result.join("");
};
