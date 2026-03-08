/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s.split(" ");
  const result = [];

  for (const word of words) {
    result.push(word.split("").reverse().join(""));
  }

  return result.join(" ");
};
