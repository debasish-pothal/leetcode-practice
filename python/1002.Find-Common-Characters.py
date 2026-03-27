class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        curr_freq = Counter(words[0])

        for i in range(1, len(words)):
            temp_freq = Counter(words[i])

            for key in list(curr_freq.keys()):
                val = temp_freq.get(key, 0)

                if val == 0:
                    del curr_freq[key]
                else:
                    curr_freq[key] = min(curr_freq[key], val)

        result = []

        for key, val in curr_freq.items():
            result.extend([key] * val)

        return result