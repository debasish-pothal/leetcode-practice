/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let score = 0;
  let ones = 0;
  let zeros = 0;
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") ones += 1;
  }

  while (index < s.length - 1) {
    if (s[index] === "0") {
      zeros += 1;
    } else {
      ones -= 1;
    }

    score = Math.max(score, zeros + ones);

    index += 1;
  }

  return score;
};
