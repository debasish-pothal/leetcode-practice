/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let maxCount = 0;
  let currentCount = 0;

  for (const c of s) {
    if (c === "(") {
      currentCount += 1;
    } else if (c === ")") {
      currentCount -= 1;
    }

    maxCount = Math.max(maxCount, currentCount);
  }

  return maxCount;
};
