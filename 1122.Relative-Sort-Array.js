/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = new Map();
  const present = [];
  const not_present = [];

  for (const num of arr1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of arr2) {
    if (map.has(num)) {
      while (map.get(num) >= 1) {
        present.push(num);
        map.set(num, map.get(num) - 1);

        if (map.get(num) === 0) {
          map.delete(num);
        }
      }
    }
  }

  for (const key of map.keys()) {
    while (map.get(key) >= 1) {
      not_present.push(key);
      map.set(key, map.get(key) - 1);

      if (map.get(key) === 0) {
        map.delete(key);
      }
    }
  }

  not_present.sort((a, b) => a - b);

  return [...present, ...not_present];
};
