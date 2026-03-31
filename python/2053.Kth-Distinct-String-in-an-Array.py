class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        freq = Counter(arr)

        count = 0

        for c in arr:
            if freq[c] != 1:
                continue

            count += 1

            if count == k:
                return c

        return ""