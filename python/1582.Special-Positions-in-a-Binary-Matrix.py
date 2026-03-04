class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        count = 0
        rows = len(mat)
        cols = len(mat[0])

        def dfs(r, c):
            sumr = 0
            sumc = 0
            nonlocal count

            for x in range(cols):
                sumr += mat[r][x]
            for x in range(rows):
                sumc += mat[x][c]
            if sumr == 1 and sumc == 1:
                count += 1

        for r in range(rows):
            for c in range(cols):
                if mat[r][c] == 1:
                    dfs(r, c)

        return count