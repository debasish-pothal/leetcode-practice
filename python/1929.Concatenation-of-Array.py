class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        ans = []
        length = len(nums)

        for i in range(0, length * 2):
            ans.append(nums[i % length])

        return ans