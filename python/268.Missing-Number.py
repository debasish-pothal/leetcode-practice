class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        req = int( (n * (n + 1)) / 2 )
        cur = sum(nums)

        return req - cur