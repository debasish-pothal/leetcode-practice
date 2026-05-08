class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        result = [[0] * n for _ in range(m)]

        for r in range(m):
            result[r][0] = 1

        for c in range(n):
            result[0][c] = 1

        for r in range(1, m):
            for c in range(1, n):
                result[r][c] = result[r - 1][c] + result[r][c - 1]


        return result[m - 1][n - 1]