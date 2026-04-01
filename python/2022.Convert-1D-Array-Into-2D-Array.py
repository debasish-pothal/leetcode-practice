class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:
        if m * n != len(original):
            return []

        res = []

        for r in range(m):
            row = []
            for c in range(n):
                row.append(original[r * n + c])
            res.append(row)

        return res
