class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        n = len(arr)
        result = [-1] * n

        for i in range(n - 2, -1, -1):
            result[i] = max(result[i + 1], arr[i + 1])

        return result