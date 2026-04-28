class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        max_1 = float('-inf')
        max_2 = float('-inf')
        max_3 = float('-inf')

        for num in nums:
            if num == max_1 or num == max_2 or num == max_3:
                continue

            if num > max_1:
                max_3 = max_2
                max_2 = max_1
                max_1 = num
            elif num > max_2:
                max_3 = max_2
                max_2 = num
            elif num > max_3:
                max_3 = num

        return max_1 if max_3 == float('-inf') else max_3