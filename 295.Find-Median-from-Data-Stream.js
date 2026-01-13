/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class MedianFinder {
  constructor() {
    this.left = new MaxPriorityQueue(); // smaller half
    this.right = new MinPriorityQueue(); // larger half
  }

  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    // add to max queue
    this.left.enqueue(num);

    // move large num to right
    this.right.enqueue(this.left.dequeue());

    // balance both
    if (this.right.size() > this.left.size()) {
      this.left.enqueue(this.right.dequeue());
    }
  }

  findMedian() {
    if (this.left.size() > this.right.size()) {
      return this.left.front();
    }

    return (this.left.front() + this.right.front()) / 2;
  }
}
