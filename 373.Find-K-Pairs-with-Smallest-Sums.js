/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const result = [];
  const heap = new Heapp((a, b) => a.sum < b.sum);

  // we initialize heap with pairs (nums1[i], nums2[0]) for i = 0 to min(k, nums1.length)
  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    heap.add({ sum: nums1[i] + nums2[0], i, j: 0 });
  }

  while (k > 0 && heap.size() > 0) {
    const { i, j } = heap.poll();
    result.push([nums1[i], nums2[j]]);
    k--;

    // If there's a next element in nums2, we push new pair (nums1[i], nums2[j+1])
    if (j + 1 < nums2.length) {
      heap.add({ sum: nums1[i] + nums2[j + 1], i, j: j + 1 });
    }
  }

  return result;
};

// Heaps implementation:
class Heapp {
  constructor(compareFn) {
    this.heap = [];
    this.compare = compareFn;
  }

  add(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  peek() {
    return this.heap[0];
  }

  poll() {
    if (this.heap.length > 1) {
      const top = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return top;
    } else {
      return this.heap.pop();
    }
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parentIndex])) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else break;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (left < length && this.compare(this.heap[left], this.heap[smallest])) {
        smallest = left;
      }

      if (
        right < length &&
        this.compare(this.heap[right], this.heap[smallest])
      ) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}
