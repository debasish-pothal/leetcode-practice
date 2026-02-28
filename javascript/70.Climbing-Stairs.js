/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }

  let prev = 1;
  let curr = 2;

  for (let i = 2; i < n; i++) {
    const temp = prev + curr;
    prev = curr;
    curr = temp;
  }

  return curr;
};
