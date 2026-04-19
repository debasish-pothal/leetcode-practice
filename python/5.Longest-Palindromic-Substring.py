class Solution:
    def longestPalindrome(self, s: str) -> str:
        start = 0
        max_length = 1

        def expandFromMiddle(left, right):
            nonlocal start, max_length

            while left >= 0 and right < len(s) and s[left] == s[right]:
                cur_length = right - left + 1

                if cur_length > max_length:
                    max_length = cur_length
                    start = left

                left -= 1
                right += 1

        for i in range(len(s)):
            expandFromMiddle(i - 1, i + 1)
            expandFromMiddle(i, i + 1)

        return s[start: start + max_length]