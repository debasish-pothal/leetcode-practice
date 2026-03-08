/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = new Map();
  let count = 0;

  const factorial = (n) => {
    if (n <= 1) {
      return n;
    }

    return n + factorial(n - 1);
  };

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], []);
    }

    map.set(nums[i], [...map.get(nums[i]), i]);
  }

  for (const [key, value] of map) {
    if (value.length > 1) {
      count += factorial(value.length - 1);
    }
  }

  return count;
};
