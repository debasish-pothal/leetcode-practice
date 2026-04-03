class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        freq = Counter(s1.split() + s2.split())
        res = []

        for key, val in freq.items():
            if val == 1:
                res.append(key)

        return res