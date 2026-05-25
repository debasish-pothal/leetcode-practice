class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [1] * n
        left_prod = [1] * n
        right_prod = 1

        for i in range(1, n):
            left_prod[i] = left_prod[i - 1] * nums[i - 1]

        for i in reversed(range(n)):
            result[i] = right_prod * left_prod[i]
            right_prod *= nums[i]

        return result