class Solution:
    def tribonacci(self, n: int) -> int:
        if n == 0:
            return 0
        if n <= 2:
            return 1

        n0 = 0
        n1 = 1
        n2 = 1

        for i in range(3, n + 1):
            temp = n0 + n1 + n2
            n0 = n1
            n1 = n2
            n2 = temp

        return n2