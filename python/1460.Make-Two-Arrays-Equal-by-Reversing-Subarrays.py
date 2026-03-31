class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        freq = defaultdict(int)

        for n1, n2 in zip(target, arr):
            freq[n1] += 1
            freq[n2] -= 1

        for n in freq:
            if freq[n] != 0:
                return False

        return True