/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
/**
 * @param {number[]} nums
 */
class NumArray {
  constructor(nums) {
    this.nums = [...nums];
    this.prefix = [];
    let sum = 0;

    for (const num of nums) {
      sum += num;
      this.prefix.push(sum);
    }
  }

  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    if (left === 0) return this.prefix[right];

    return this.prefix[right] - this.prefix[left - 1];
  }
}
