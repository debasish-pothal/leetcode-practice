/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const incomingMap = new Map();
  const outgoingMap = new Map();
  const incomingEdges = n - 1;
  const outgoingEdges = 0;

  for (let i = 1; i <= n; i++) {
    incomingMap.set(i, 0);
    outgoingMap.set(i, 0);
  }

  for (const [j1, j2] of trust) {
    incomingMap.set(j2, incomingMap.get(j2) + 1);
    outgoingMap.set(j1, outgoingMap.get(j1) + 1);
  }

  for (let i = 1; i <= n; i++) {
    if (
      incomingMap.get(i) === incomingEdges &&
      outgoingMap.get(i) === outgoingEdges
    ) {
      return i;
    }
  }

  return -1;
};
