/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

/**
 * @param {number} k
 */
class MyCircularQueue {
  constructor(k) {
    this.space = k;
    this.left = new Node(0);
    this.right = new Node(0);

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value) {
    if (this.isFull()) {
      return false;
    }

    const node = new Node(value, this.right, this.right.prev);
    this.right.prev.next = node;
    this.right.prev = node;

    this.space -= 1;

    return true;
  }

  /**
   * @return {boolean}
   */
  deQueue() {
    if (this.isEmpty()) {
      return false;
    }

    this.left.next = this.left.next.next;
    this.left.next.prev = this.left;

    this.space += 1;

    return true;
  }

  /**
   * @return {number}
   */
  Front() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.left.next.value;
  }

  /**
   * @return {number}
   */
  Rear() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.right.prev.value;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.left.next === this.right;
  }

  /**
   * @return {boolean}
   */
  isFull() {
    return this.space === 0;
  }
}
