class Solution:
    def hasAllChars(self, charsMap, wordMap) -> bool:
        for key, val in wordMap.items():
            if key not in charsMap or charsMap.get(key) < val:
                return False
        return True

    def createWordMap(self, word) -> Dict[str, int]:
        m = {}

        for w in word:
            m[w] = m.get(w, 0) + 1

        return m

    def countCharacters(self, words: List[str], chars: str) -> int:
        charsMap = self.createWordMap(chars)
        length = 0
        
        for word in words:
            if (self.hasAllChars(charsMap, self.createWordMap(word))):
                length += len(word)

        return length