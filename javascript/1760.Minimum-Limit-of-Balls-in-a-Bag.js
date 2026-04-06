/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  const canDivide = (maxBalls) => {
    let ops = 0;

    for (const num of nums) {
      ops += Math.ceil(num / maxBalls) - 1;

      if (ops > maxOperations) {
        return false;
      }
    }

    return true;
  };

  let left = 1;
  let right = Math.max(...nums);
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canDivide(mid)) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
};
