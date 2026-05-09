class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])

        result = [0] * cols
        result[0] = grid[0][0]

        for c in range(1, cols):
            result[c] = result[c - 1] + grid[0][c]

        for r in range(1, rows):
            result[0] += grid[r][0]

            for c in range(1, cols):
                result[c] = grid[r][c] + min(
                    result[c],
                    result[c - 1]
                )

        return result[cols - 1]