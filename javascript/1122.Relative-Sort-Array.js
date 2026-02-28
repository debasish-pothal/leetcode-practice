/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const rank = new Map();

  arr2.forEach((num, i) => rank.set(num, i));

  arr1.sort((a, b) => {
    const ra = rank.has(a) ? rank.get(a) : Infinity;
    const rb = rank.has(b) ? rank.get(b) : Infinity;

    return ra === rb ? a - b : ra - rb;
  });

  return arr1;
};
