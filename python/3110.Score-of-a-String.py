class Solution:
    def scoreOfString(self, s: str) -> int:
        score = 0
        prev = ord(s[0])

        for i in range(1, len(s)):
            curr = ord(s[i])
            score += abs(prev - curr)
            prev = curr

        return score