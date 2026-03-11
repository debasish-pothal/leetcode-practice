from collections import Counter

class Solution:
    def hasAllChars(self, charsMap, wordMap) -> bool:
        for key, val in wordMap.items():
            if key not in charsMap or charsMap.get(key) < val:
                return False
        return True

    def countCharacters(self, words: List[str], chars: str) -> int:
        charsMap = Counter(chars)
        length = 0
        
        for word in words:
            if (self.hasAllChars(charsMap, Counter(word))):
                length += len(word)

        return length