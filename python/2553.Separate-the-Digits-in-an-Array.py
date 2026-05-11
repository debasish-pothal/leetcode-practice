class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        s = ''

        for num in nums:
            s += str(num)

        return list(map(int, list(s)))