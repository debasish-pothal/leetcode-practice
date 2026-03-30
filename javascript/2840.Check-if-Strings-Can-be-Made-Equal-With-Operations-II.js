/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function (s1, s2) {
  const s1_even = [];
  const s2_even = [];
  const s1_odd = [];
  const s2_odd = [];

  for (let i = 0; i < s1.length; i++) {
    if (i % 2 === 0) {
      s1_even.push(s1[i]);
      s2_even.push(s2[i]);
    } else {
      s1_odd.push(s1[i]);
      s2_odd.push(s2[i]);
    }
  }

  const group1 = s1_even.sort().join("") === s2_even.sort().join("");
  const group2 = s1_odd.sort().join("") === s2_odd.sort().join("");

  return group1 && group2;
};
