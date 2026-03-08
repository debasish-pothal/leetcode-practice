class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        res = []

        for r in range(numRows):
            curr = []
            for c in range(r + 1):
                if c == 0 or r == c:
                    curr.append(1)
                else:
                    curr.append(res[r - 1][c - 1] + res[r - 1][c])
            res.append(curr)

        return res