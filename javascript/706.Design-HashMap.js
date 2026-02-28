/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

class Node {
  constructor(key = -1, val = -1, next = null) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class MyHashMap {
  constructor() {
    this.length = 1000;
    this.map = [];

    for (let i = 0; i < this.length; i++) {
      this.map[i] = new Node();
    }
  }

  hash(key) {
    return key % this.length;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, val) {
    let curr = this.map[this.hash(key)];

    while (curr) {
      if (curr.key === key) {
        curr.val = val;
        return;
      }

      if (!curr.next) break;
      curr = curr.next;
    }

    curr.next = new Node(key, val);
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    let curr = this.map[this.hash(key)];

    while (curr) {
      if (curr.key === key) {
        return curr.val;
      }

      curr = curr.next;
    }

    return -1;
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    let dummy = this.map[this.hash(key)];
    let prev = dummy;
    let curr = dummy.next;

    while (curr) {
      if (curr.key === key) {
        prev.next = curr.next;
        return;
      }

      prev = curr;
      curr = curr.next;
    }
  }
}
