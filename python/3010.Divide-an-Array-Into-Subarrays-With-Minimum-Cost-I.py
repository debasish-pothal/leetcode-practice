class Solution:
    def minimumCost(self, nums: List[int]) -> int:
        answer = float("inf")
        second_min = nums[1]

        for i in range(2, len(nums)):
            answer = min(answer, nums[0] + second_min + nums[i])
            second_min = min(second_min, nums[i])

        return answer