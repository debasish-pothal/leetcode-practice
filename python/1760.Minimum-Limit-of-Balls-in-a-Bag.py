class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        def canDivide(maxBalls):
            ops = 0

            for num in nums:
                ops += ceil(num / maxBalls) - 1
                
                if ops > maxOperations:
                    return False
            
            return True

        left = 1
        right = max(nums)
        ans = right

        while left <= right:
            mid = left + (right - left) // 2
            if canDivide(mid):
                ans = mid
                right = mid - 1
            else:
                left = mid + 1

        return ans