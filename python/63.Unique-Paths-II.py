class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        rows = len(obstacleGrid)
        cols = len(obstacleGrid[0])
        result = [0] * cols
        result[cols - 1] = 1

        for r in reversed(range(rows)):
            for c in reversed(range(cols)):
                if obstacleGrid[r][c]:
                    result[c] = 0
                elif c + 1 < cols:
                    result[c] += result[c + 1]

        return result[0]