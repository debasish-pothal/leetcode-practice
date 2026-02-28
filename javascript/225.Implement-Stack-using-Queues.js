/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

class MyStack {
  constructor() {
    this.pushQ = [];
    this.popQ = [];
  }

  push(x) {
    while (this.pushQ.length) {
      this.popQ.push(this.pushQ.pop());
    }

    this.pushQ.push(x);

    while (this.popQ.length) {
      this.pushQ.push(this.popQ.pop());
    }
  }

  pop() {
    while (this.pushQ.length) {
      this.popQ.push(this.pushQ.pop());
    }

    const num = this.popQ.pop();

    while (this.popQ.length) {
      this.pushQ.push(this.popQ.pop());
    }

    return num;
  }

  top() {
    return this.pushQ[0];
  }

  empty() {
    return this.pushQ.length === 0 && this.popQ.length === 0;
  }
}
