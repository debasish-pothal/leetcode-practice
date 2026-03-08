class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        freq = {}
        count = 0

        for num in nums:
            freq[num] = freq.get(num, 0) + 1

        for f in freq.values():
            if f > 1:
                count += ((f * (f - 1)) // 2)

        return count