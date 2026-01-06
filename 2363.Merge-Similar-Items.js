/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  items1.sort((a, b) => a[0] - b[0]);
  items2.sort((a, b) => a[0] - b[0]);

  const result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < items1.length && p2 < items2.length) {
    if (items1[p1][0] < items2[p2][0]) {
      result.push(items1[p1]);
      p1 += 1;
    } else if (items1[p1][0] > items2[p2][0]) {
      result.push(items2[p2]);
      p2 += 1;
    } else {
      result.push([items1[p1][0], items1[p1][1] + items2[p2][1]]);
      p1 += 1;
      p2 += 1;
    }
  }

  while (p1 < items1.length) {
    result.push(items1[p1]);
    p1 += 1;
  }

  while (p2 < items2.length) {
    result.push(items2[p2]);
    p2 += 1;
  }

  return result;
};
