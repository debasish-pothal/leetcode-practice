class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])

        result = [[float("inf")] * cols for _ in range(rows)]
        result[0][0] = grid[0][0]

        for r in range(1, rows):
            result[r][0] = result[r - 1][0] + grid[r][0]

        for c in range(1, cols):
            result[0][c] = result[0][c - 1] + grid[0][c]

        for r in range(1, rows):
            for c in range(1, cols):
                result[r][c] = min(
                    result[r][c],
                    grid[r][c] + result[r - 1][c],
                    grid[r][c] + result[r][c - 1]
                )

        return result[rows - 1][cols - 1]