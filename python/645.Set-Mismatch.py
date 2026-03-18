class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        duplicate = 0
        missing = 0
        seen = set()

        for num in nums:
            if num in seen:
                duplicate = num
            seen.add(num)

        for i in range(1, len(nums) + 1):
            if i not in seen:
                missing = i
                break

        return [duplicate, missing]