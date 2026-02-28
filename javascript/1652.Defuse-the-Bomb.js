/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const n = code.length;
  const result = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (k > 0) {
      for (let j = i + 1; j < i + 1 + k; j++) {
        result[i] += code[j % n];
      }
    } else if (k < 0) {
      for (let j = i - 1; j > i - 1 - Math.abs(k); j--) {
        result[i] += code[(j + n) % n];
      }
    }
  }

  return result;
};
