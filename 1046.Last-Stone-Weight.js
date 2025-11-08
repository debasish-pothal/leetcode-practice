/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length === 1) return stones[0];

  if (stones.length === 2 && stones[0] === stones[1]) return 0;

  stones.sort((a, b) => a - b);
  const stone1 = stones[stones.length - 1];
  const stone2 = stones[stones.length - 2];
  const stone0 = stone1 - stone2;

  stones.splice(-2, 2);
  stones.push(stone0);

  return lastStoneWeight(stones);
};
