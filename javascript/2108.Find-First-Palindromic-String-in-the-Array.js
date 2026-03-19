/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  const isPalindrome = (word) => {
    return word === word.split("").reverse().join("");
  };

  for (const word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }

  return "";
};
