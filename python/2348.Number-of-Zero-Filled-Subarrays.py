class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        zeros = 0
        result = 0

        for num in nums:
            if num == 0:
                zeros += 1
                result += zeros
            else:
                zeros = 0

        return result