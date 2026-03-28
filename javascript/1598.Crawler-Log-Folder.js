/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let depth = 0;

  for (const log of logs) {
    if (log === "../") {
      if (depth) depth -= 1;
    } else if (log !== "./") {
      depth += 1;
    }
  }

  return depth;
};
