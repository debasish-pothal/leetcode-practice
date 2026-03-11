from collections import Counter

class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        chars_count = Counter(chars)
        length = 0
        
        for word in words:
            word_count = Counter(word)
            if all(chars_count[c] >= word_count[c] for c in word_count):
                length += len(word)

        return length