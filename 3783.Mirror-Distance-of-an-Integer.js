/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
  let nCopy = n;
  let nRev = 0;

  while (nCopy) {
    nRev = nRev * 10 + (nCopy % 10);
    nCopy = Math.floor(nCopy / 10);
  }

  return Math.abs(nRev - n);
};
