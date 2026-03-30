/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
  const group1 =
    [s1[0], s1[2]].sort().join("") === [s2[0], s2[2]].sort().join("");
  const group2 =
    [s1[1], s1[3]].sort().join("") === [s2[1], s2[3]].sort().join("");

  return group1 && group2;
};
