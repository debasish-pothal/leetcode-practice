/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a).slice(0, k);
  }

  add(val) {
    if (this.nums.length < this.k) {
      this.nums.push(val);
      this.nums.sort((a, b) => b - a);
    } else if (val > this.nums[this.k - 1]) {
      this.nums[this.k - 1] = val;
      this.nums.sort((a, b) => b - a);
    }

    return this.nums[this.k - 1];
  }
}
