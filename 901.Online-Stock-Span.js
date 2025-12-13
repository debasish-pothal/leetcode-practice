/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

class StockSpanner {
  constructor() {
    this.stack = []; // [price, span]
  }

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let span = 1;

    while (this.stack.length && price >= this.stack[this.stack.length - 1][0]) {
      const top = this.stack.pop();
      span += top[1];
    }

    this.stack.push([price, span]);

    return span;
  }
}
