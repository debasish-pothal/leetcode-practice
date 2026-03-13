/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  for (i = num.length - 1; i >= 0; i--) {
    const d = num[i];

    if (["1", "3", "5", "7", "9"].includes(d)) {
      return num.slice(0, i + 1);
    }
  }

  return "";
};
