class Solution:
    def totalMoney(self, n: int) -> int:
        total = 0
        start = 1

        while n > 0:
            days = min(n, 7)

            for i in range(days):
                total += start + i
            
            n -= 7
            start += 1

        return total