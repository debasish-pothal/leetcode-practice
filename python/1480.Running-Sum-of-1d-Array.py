class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        n = len(nums)
        total = 0
        result = []

        for i in range(n):
            total += nums[i]
            result.append(total)

        return result