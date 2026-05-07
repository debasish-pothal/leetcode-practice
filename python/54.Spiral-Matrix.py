class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        result = []
        rows = len(matrix)
        cols = len(matrix[0])
        size = rows * cols

        top = 0
        bottom = rows - 1
        left = 0
        right = cols - 1

        while len(result) < size:
            # left to right
            for i in range(left, right + 1):
                if len(result) < size:
                    result.append(matrix[top][i])
            top += 1

            # top to bottom
            for i in range(top, bottom + 1):
                if len(result) < size:
                    result.append(matrix[i][right])
            right -= 1

            # right to left
            for i in range(right, left - 1, -1):
                if len(result) < size:
                    result.append(matrix[bottom][i])
            bottom -= 1

            # bottom to top
            for i in range(bottom, top - 1, -1):
                if len(result) < size:
                    result.append(matrix[i][left])
            left += 1

        return result