/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;

  const result = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      result[i] = 1 + result[i - 1];
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && result[i] <= result[i + 1]) {
      result[i] = 1 + result[i + 1];
    }
  }

  return result.reduce((a, c) => a + c, 0);
};
