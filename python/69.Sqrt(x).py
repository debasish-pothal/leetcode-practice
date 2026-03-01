class Solution:
    def mySqrt(self, x: int) -> int:
        left, right = 0, x

        while left <= right:
            mid = (left + right) // 2
            msqr = mid * mid

            if (msqr < x):
                left = mid + 1
            elif (msqr > x):
                right = mid - 1
            else:
                return mid
        return right