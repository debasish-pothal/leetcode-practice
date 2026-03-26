/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  const dfs = (i, total) => {
    if (i === nums.length) {
      return total;
    }

    return dfs(i + 1, total ^ nums[i]) + dfs(i + 1, total);
  };

  return dfs(0, 0);
};
