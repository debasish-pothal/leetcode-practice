/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyHashSet {
  constructor() {
    this.max = Math.pow(10, 4);
    this.set = [];

    for (let i = 0; i < this.max; i++) {
      this.set[i] = new Node();
    }
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    const index = key % this.max;
    let curr = this.set[index];

    while (curr && curr.next) {
      if (curr.next.val === key) {
        return;
      }

      curr = curr.next;
    }

    curr.next = new Node(key);
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const index = key % this.max;
    let curr = this.set[index];

    while (curr && curr.next) {
      if (curr.next.val === key) {
        curr.next = curr.next.next;
      }

      curr = curr.next;
    }
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    const index = key % this.max;
    let curr = this.set[index];

    while (curr && curr.next) {
      if (curr.next.val === key) {
        return true;
      }

      curr = curr.next;
    }

    return false;
  }
}
