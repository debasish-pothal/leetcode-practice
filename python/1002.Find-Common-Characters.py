class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        curr_freq = Counter(words[0])

        for i in range(1, len(words)):
            curr_freq &= Counter(words[i])

        result = []

        for key, val in curr_freq.items():
            result.extend([key] * val)

        return result