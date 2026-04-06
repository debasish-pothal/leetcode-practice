/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  const canDevide = (maxBalls) => {
    let ops = 0;

    for (const num of nums) {
      ops += Math.ceil(num / maxBalls) - 1;

      if (ops > maxOperations) {
        return false;
      }
    }

    return true;
  };

  for (let i = 1; i < Math.max(...nums); i++) {
    if (canDevide(i)) {
      return i;
    }
  }
};
