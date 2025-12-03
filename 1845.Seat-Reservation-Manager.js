/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
/**
 * @param {number} n
 */
class SeatManager {
  constructor(n) {
    this.minHeap = new MinPriorityQueue();

    for (let i = 1; i <= n; i++) {
      this.minHeap.enqueue(i);
    }
  }

  /**
   * @return {number}
   */
  reserve() {
    return this.minHeap.dequeue();
  }

  /**
   * @param {number} seatNumber
   * @return {void}
   */
  unreserve(seatNumber) {
    this.minHeap.enqueue(seatNumber);
  }
}
