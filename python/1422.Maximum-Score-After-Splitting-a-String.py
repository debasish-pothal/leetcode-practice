class Solution:
    def maxScore(self, s: str) -> int:
        ones, zeros, score = 0, 0, 0

        for c in s:
            if c == "1":
                ones += 1

        for i in range(len(s) - 1):
            c = s[i]
            if c == "0":
                zeros += 1
            else:
                ones -= 1
            score = max(score, ones + zeros)

        return score