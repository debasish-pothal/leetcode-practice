/**
 * @param {number} n
 * @return {boolean}
 */
const digitSum = (n) => {
  let sum = 0;

  while (n) {
    const rem = n % 10;
    n = Math.floor(n / 10);
    sum += rem * rem;
  }

  return sum;
};

var isHappy = function (n) {
  let slow = n;
  let fast = n;

  while (true) {
    slow = digitSum(slow);
    fast = digitSum(digitSum(fast));

    if (slow === fast) {
      return slow === 1;
    }
  }

  return false;
};
