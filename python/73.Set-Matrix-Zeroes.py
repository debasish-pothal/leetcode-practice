class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        rows = len(matrix)
        cols = len(matrix[0])
        zero_indices = []

        for r in range(rows):
            for c in range(cols):
                if matrix[r][c] == 0:
                    zero_indices.append((r, c))

        for zero_index in zero_indices:
            row, col = zero_index

            for r in range(rows):
                matrix[r][col] = 0
            for c in range(cols):
                matrix[row][c] = 0
