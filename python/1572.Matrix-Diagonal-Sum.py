class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        n = len(mat)
        left = 0
        right = n - 1
        total = 0

        while left < n:
            if left == right:
                total += mat[left][left]
            else:
                total += mat[left][left] + mat[left][right]
            
            left += 1
            right -= 1

        return total