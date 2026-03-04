class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        count = 0
        rows = len(mat)
        cols = len(mat[0])
        row_sum = [0] * rows
        col_sum = [0] * cols

        for r in range(rows):
            for c in range(cols):
                if mat[r][c] == 1:
                    row_sum[r] += 1
                    col_sum[c] += 1

        for r in range(rows):
            for c in range(cols):
                if mat[r][c] == 1 and row_sum[r] == 1 and col_sum[c] == 1:
                    count += 1

        return count