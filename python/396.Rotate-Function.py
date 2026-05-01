class Solution:
    def maxRotateFunction(self, nums: List[int]) -> int:
        n = len(nums)
        total_sum = 0
        temp = 0

        for i in range(n):
            total_sum += nums[i]
            temp += i * nums[i]

        max_val = temp

        for k in range(1, n):
            temp = temp + total_sum - n * nums[n - k]
            max_val = max(max_val, temp)

        return max_val