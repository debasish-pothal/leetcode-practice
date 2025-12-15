/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  gifts = gifts.map((g) => -1 * g);

  const minHeap = new MinPriorityQueue();

  for (let i = 0; i < gifts.length; i++) {
    minHeap.enqueue(gifts[i]);
  }

  for (let i = 0; i < k; i++) {
    const n = -1 * minHeap.dequeue();
    const sqrt = Math.floor(Math.sqrt(n));
    minHeap.enqueue(-1 * sqrt);
  }

  let sum = 0;

  while (minHeap.size()) {
    const n = -1 * minHeap.dequeue();
    sum += n;
  }

  return sum;
};
