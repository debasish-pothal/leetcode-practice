/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  words.sort((a, b) => a.length - b.length);
  const result = new Set();

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].includes(words[i])) {
        result.add(words[i]);
      }
    }
  }

  return Array.from(result);
};
