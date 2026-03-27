class Solution:
    def longestPalindrome(self, s: str) -> int:
        seen = set()
        length = 0

        for c in s:
            if c in seen:
                length += 2
                seen.remove(c)
            else:
                seen.add(c)

        return length + 1 if length < len(s) else length