/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  const mismatches = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      mismatches.push(i);
    }

    if (mismatches.length > 2) {
      return false;
    }
  }

  if (mismatches.length === 0) {
    return true;
  }

  if (mismatches.length === 1) {
    return false;
  }

  const [i, j] = mismatches;

  return s1[i] === s2[j] && s1[j] === s2[i];
};
