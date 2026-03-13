class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        rows = len(matrix)
        cols = len(matrix[0])

        result = [None] * cols

        for i in range(cols):
            result[i] = [None] * rows

        for i in range(cols):
            for j in range(rows):
                result[i][j] = matrix[j][i]

        return result