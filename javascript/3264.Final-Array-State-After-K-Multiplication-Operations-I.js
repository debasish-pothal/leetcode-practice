/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  const pq = new MinPriorityQueue();
  const OFFSET = 10000;
  const numsCopy = [...nums];

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i] * OFFSET + i);
  }

  while (k--) {
    const encoded = pq.dequeue();
    const idx = encoded % OFFSET;
    numsCopy[idx] *= multiplier;
    pq.enqueue(numsCopy[idx] * OFFSET + idx);
  }

  return numsCopy;
};
