/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  if (sentence[0] !== sentence[sentence.length - 1]) return false;

  const sArr = sentence.split(" ");

  for (let i = 1; i < sArr.length; i++) {
    const currS = sArr[i];
    const prevS = sArr[i - 1];

    if (currS[0] !== prevS[prevS.length - 1]) return false;
  }

  return true;
};
