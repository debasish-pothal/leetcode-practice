class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [0] * n
        i = n - 1
        start = 0
        end = n - 1

        while start <= end:
            sSqr = nums[start] ** 2
            eSqr = nums[end] ** 2

            if sSqr > eSqr:
                result[i] = sSqr
                start += 1
                i -= 1
            else:
                result[i] = eSqr
                end -= 1
                i -= 1
        
        return result