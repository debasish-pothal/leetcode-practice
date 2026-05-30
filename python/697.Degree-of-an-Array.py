class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
        count = {}
        first = {}

        result = len(nums)
        degree = 0

        for i, num in enumerate(nums):
            if num not in first:
                first[num] = i

            count[num] = count.get(num, 0) + 1

            if count[num] > degree:
                degree = count[num]
                result = i - first[num] + 1
            elif count[num] == degree:
                result = min(result, i - first[num] + 1)

        return result