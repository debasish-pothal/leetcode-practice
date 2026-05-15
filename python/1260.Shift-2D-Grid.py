class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        rows = len(grid)
        cols = len(grid[0])
        total = rows * cols
        k %= total

        result = [[None] * cols for _ in range(rows)]

        for r in range(rows):
            for c in range(cols):
                idx = r * cols + c
                new_idx = (idx + k) % total

                new_r = new_idx // cols
                new_c = new_idx % cols

                result[new_r][new_c] = grid[r][c]

        return result