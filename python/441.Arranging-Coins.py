class Solution:
    def arrangeCoins(self, n: int) -> int:
        count = 0
        coins = 1
        inc = 2

        while coins <= n:
            count += 1
            coins += inc
            inc += 1

        return count