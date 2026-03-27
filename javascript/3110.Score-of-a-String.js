/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let score = 0;
  let prev = s.charCodeAt(0);

  for (let i = 1; i < s.length; i++) {
    const curr = s.charCodeAt(i);
    score += Math.abs(prev - curr);
    prev = curr;
  }

  return score;
};
