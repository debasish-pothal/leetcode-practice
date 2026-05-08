class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        result = [1] * n

        for r in range(1, m):
            for c in range(1, n):
                result[c] = result[c] + result[c - 1]

        return result[n - 1]