/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const trustArr = Array(n).fill(0);

  for (const [j1, j2] of trust) {
    trustArr[j1 - 1] -= 1;
    trustArr[j2 - 1] += 1;
  }

  for (let i = 0; i < n; i++) {
    if (trustArr[i] === n - 1) {
      return i + 1;
    }
  }

  return -1;
};
