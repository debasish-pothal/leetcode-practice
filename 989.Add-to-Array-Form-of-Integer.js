/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const result = [];
  let index = num.length - 1;
  let cary = 0;

  while (index >= 0 || k) {
    const v1 = k % 10;
    k = Math.floor(k / 10);
    const v2 = num[index] || 0;
    let sum = v1 + v2 + cary;

    if (sum > 9) {
      cary = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      cary = 0;
    }

    result.push(sum);

    index -= 1;
  }

  if (cary) {
    result.push(cary);
  }

  return result.reverse();
};
