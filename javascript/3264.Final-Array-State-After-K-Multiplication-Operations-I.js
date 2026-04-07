/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  const numsCopy = [...nums];

  const getMinIndex = () => {
    let min = 0;

    for (let i = 0; i < numsCopy.length; i++) {
      if (numsCopy[i] < numsCopy[min]) {
        min = i;
      }
    }

    return min;
  };

  while (k) {
    const idx = getMinIndex();
    numsCopy[idx] *= multiplier;
    k -= 1;
  }

  return numsCopy;
};
