class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        first_index = {}
        length = -1

        for i in range(len(s)):
            if s[i] not in first_index:
                first_index[s[i]] = i
            else:
                curr_length = i - first_index[s[i]] - 1
                length = max(length, curr_length)

        return length