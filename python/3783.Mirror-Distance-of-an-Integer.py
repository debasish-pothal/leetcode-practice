class Solution:
    def mirrorDistance(self, n: int) -> int:
        rev_num = 0
        n_copy = n

        while n_copy:
            digit = n_copy % 10
            rev_num = rev_num * 10 + digit
            n_copy //= 10 

        return abs(n - rev_num)