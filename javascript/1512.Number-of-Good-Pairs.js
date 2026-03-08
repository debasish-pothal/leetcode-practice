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
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (value > 1) {
      count += factorial(value - 1);
    }
  }

  return count;
};
