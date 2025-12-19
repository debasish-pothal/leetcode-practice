/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const minHeap = new MinPriorityQueue();
  const result = [];

  for (const num of nums) map.set(num, (map.get(num) || 0) + 1);

  for (const [num, count] of map) {
    minHeap.enqueue(num, -1 * count);
  }

  for (let i = 0; i < k; i++) {
    result.push(minHeap.dequeue());
  }

  return result;
};
