/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let result = "0";

  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i] == num[i + 2]) {
      const sub = num.substring(i, i + 3);

      if (sub > result) {
        result = sub;
      }
    }
  }

  return result === "0" ? "" : result;
};
