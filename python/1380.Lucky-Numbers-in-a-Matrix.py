class Solution:
    def luckyNumbers(self, matrix: List[List[int]]) -> List[int]:
        lucky = []
        rows = len(matrix)
        cols = len(matrix[0])
        rows_min = []
        cols_max = []

        for r in range(rows):
            rows_min.append(min(matrix[r]))

        for c in range(cols):
            max_val = float('-inf')
            for r in range(rows):
                max_val = max(max_val, matrix[r][c])
            cols_max.append(max_val)

        for r in range(rows):
            for c in range(cols):
                if matrix[r][c] == rows_min[r] and matrix[r][c] == cols_max[c]:
                    lucky.append(matrix[r][c])

        return lucky