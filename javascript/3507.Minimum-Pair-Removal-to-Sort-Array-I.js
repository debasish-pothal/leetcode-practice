/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  let ops = 0;

  const isNonDecreasing = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) return false;
    }

    return true;
  };

  while (!isNonDecreasing(nums)) {
    let minIndex = 0;
    let minSum = Infinity;

    for (let i = 0; i < nums.length - 1; i++) {
      const sum = nums[i] + nums[i + 1];

      if (sum < minSum) {
        minSum = sum;
        minIndex = i;
      }
    }

    nums[minIndex] = minSum;
    nums.splice(minIndex + 1, 1);

    ops += 1;
  }

  return ops;
};
