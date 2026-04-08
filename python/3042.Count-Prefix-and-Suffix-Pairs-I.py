class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        count = 0

        def isValid(word1, word2):
            return word2.startswith(word1) and word2.endswith(word1)

        for i in range(len(words)):
            for j in range(i + 1, len(words)):
                if isValid(words[i], words[j]):
                    count += 1

        return count