class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        i = 0
        result = []

        while i < len(word1 + word2):
            if i < len(word1):
                result.append(word1[i])
            if i < len(word2):
                result.append(word2[i])
            i += 1

        return "".join(result)