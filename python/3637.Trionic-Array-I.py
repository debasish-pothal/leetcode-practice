class Solution:
    def isTrionic(self, nums: List[int]) -> bool:
        n = len(nums)
        i = 0
        p = -1
        q = -1

        if n < 4:
            return False

        while i + 1 < n and nums[i + 1] > nums[i]:
            i += 1
        p = i

        while i + 1 < n and nums[i + 1] < nums[i]:
            i += 1
        q = i

        while i + 1 < n and nums[i + 1] > nums[i]:
            i += 1

        return p > 0 and p < q and q < n - 1 and i == n - 1