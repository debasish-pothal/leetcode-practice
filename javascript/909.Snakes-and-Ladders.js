/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  board.reverse();
  const length = board.length;
  const visited = new Set();
  const q = []; // [square, move]
  q.push([1, 0]);

  const sqrToCoord = (sqr) => {
    const r = Math.floor((sqr - 1) / length);
    let c = (sqr - 1) % length;

    if (r % 2) {
      c = length - 1 - c;
    }

    return [r, c];
  };

  while (q.length) {
    const [square, move] = q.shift();

    for (let i = 1; i <= 6; i++) {
      let nextSqr = square + i;
      const [r, c] = sqrToCoord(nextSqr);

      if (board[r][c] !== -1) {
        nextSqr = board[r][c];
      }

      if (nextSqr === length * length) {
        return move + 1;
      }

      if (!visited.has(nextSqr)) {
        visited.add(nextSqr);
        q.push([nextSqr, move + 1]);
      }
    }
  }

  return -1;
};
