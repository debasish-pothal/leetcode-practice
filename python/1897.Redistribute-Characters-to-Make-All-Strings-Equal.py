class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        freq = defaultdict(int)
        length = len(words)

        for w in words:
            for c in w:
                freq[c] += 1

        for val in freq.values():
            if val % length:
                return False

        return True