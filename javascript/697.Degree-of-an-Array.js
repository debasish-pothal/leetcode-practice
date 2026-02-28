/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!map.has(num)) {
      map.set(num, {
        count: 1,
        first: i,
        last: i,
      });
    } else {
      const obj = map.get(num);

      map.set(num, {
        ...obj,
        count: obj.count + 1,
        last: i,
      });
    }
  }

  let degree = -Infinity;
  let result = Infinity;

  for (const [num, obj] of map) {
    const { count, first, last } = obj;
    const length = last - first + 1;

    if (count > degree) {
      degree = count;
      result = length;
    } else if (count === degree) {
      result = Math.min(result, length);
    }
  }

  return result;
};
