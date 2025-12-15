/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const length = sentence.length;

  if (sentence[0] !== sentence[length - 1]) return false;

  for (let i = 1; i < length; i++) {
    if (sentence[i] === " " && sentence[i - 1] !== sentence[i + 1])
      return false;
  }

  return true;
};
