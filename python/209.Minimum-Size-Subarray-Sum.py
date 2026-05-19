class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        size = float("inf")
        left = 0
        right = 0
        total = 0

        while left < len(nums):
            if total < target:
                if right == len(nums):
                    break

                total += nums[right]
                right += 1
            else:
                new_size = right - left
                size = min(size, new_size)
                
                total -= nums[left]
                left += 1

        return 0 if size == float("inf") else size