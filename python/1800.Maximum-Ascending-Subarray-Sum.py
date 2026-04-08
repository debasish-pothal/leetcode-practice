class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        max_score = nums[0]
        cur_score = nums[0]

        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                cur_score += nums[i]
            else:
                cur_score = nums[i]
            max_score = max(max_score, cur_score)

        return max_score