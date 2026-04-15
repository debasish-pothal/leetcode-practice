class Solution:
    def prefixesDivBy5(self, nums: List[int]) -> List[bool]:
        result = []
        value = 0

        for num in nums:
            value = (value * 2 + num) % 5

            result.append(value == 0)

        return result