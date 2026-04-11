class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        n = len(grid)
        total = n * n
        freq = [0] * (total + 1)
        missing = None
        repeating = None

        for r in range(n):
            for c in range(n):
                freq[grid[r][c]] += 1

        for i in range(1, total + 1):
            if freq[i] == 0:
                missing = i
            if freq[i] > 1:
                repeating = i

        return [repeating, missing]