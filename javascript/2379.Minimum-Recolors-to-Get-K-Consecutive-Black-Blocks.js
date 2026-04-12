/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let countW = 0;
  let min = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") countW += 1;
  }

  min = countW;

  for (let i = k; i < blocks.length; i++) {
    if (blocks[i - k] === "W") countW -= 1; // outgoing
    if (blocks[i] === "W") countW += 1; // incoming

    min = Math.min(min, countW);
  }

  return min;
};
