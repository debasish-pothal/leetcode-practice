class Solution:
    def numEnclaves(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        visited = set()
        land = 0
        border_land = 0

        def dfs(r, c):
            if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == 0 or (r, c) in visited:
                return 0
            visited.add((r, c))
            count = 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1)
            return count

        for r in range(rows):
            for c in range(cols):
                land += grid[r][c]

                if grid[r][c] == 1 and (r in [0, rows - 1] or c in [0, cols - 1]) and (r, c) not in visited:
                    border_land += dfs(r, c)

        return land - border_land