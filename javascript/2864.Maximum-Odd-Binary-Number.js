/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let one = 0;

  for (const c of s) {
    if (c === "1") {
      one += 1;
    }
  }

  return "1".repeat(one - 1) + "0".repeat(s.length - one) + "1";
};
