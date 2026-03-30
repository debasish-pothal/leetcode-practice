/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function (s1, s2) {
  const even = new Array(26).fill(0);
  const odd = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    const idx1 = s1.charCodeAt(i) - 97;
    const idx2 = s2.charCodeAt(i) - 97;

    if (i % 2 === 0) {
      even[idx1] += 1;
      even[idx2] -= 1;
    } else {
      odd[idx1] += 1;
      odd[idx2] -= 1;
    }
  }

  const group1 = even.every((n) => n === 0);
  const group2 = odd.every((n) => n === 0);

  return group1 && group2;
};
