/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const sStk = [];
  const tStk = [];

  for (const c of s) {
    if (c === "#") {
      sStk.pop();
    } else {
      sStk.push(c);
    }
  }

  for (const c of t) {
    if (c === "#") {
      tStk.pop();
    } else {
      tStk.push(c);
    }
  }

  return sStk.join("") === tStk.join("");
};
