/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const n = arr.length;
  const result = new Array(n).fill(-1);

  for (let i = n - 2; i >= 0; i--) {
    result[i] = Math.max(result[i + 1], arr[i + 1]);
  }

  return result;
};
