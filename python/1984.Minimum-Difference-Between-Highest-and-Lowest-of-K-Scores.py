class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        if k == 1:
            return 0

        nums.sort()
        result = float("inf")

        for i in range(len(nums) - k + 1):
            j = i + k -1
            result = min(result, nums[j] - nums[i])

        return result