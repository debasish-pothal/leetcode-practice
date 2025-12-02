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

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      this.prefix.push(sum);
    }
  }

  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    const val1 = left - 1 < 0 ? 0 : this.prefix[left - 1];
    const val2 = this.prefix[right];

    return val2 - val1;
  }
}
