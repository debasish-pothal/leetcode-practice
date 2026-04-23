/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  const factorial = (n) => {
    if (n <= 1) {
      return 1;
    }

    return n + factorial(n - 1);
  };

  const countConsecutiveZeros = (idx) => {
    let length = 0;

    while (nums[idx] === 0) {
      length += 1;
      idx += 1;
    }

    return [length, idx];
  };

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      const [length, idx] = countConsecutiveZeros(i);

      result += factorial(length);
      i = idx;
    }
  }

  return result;
};
