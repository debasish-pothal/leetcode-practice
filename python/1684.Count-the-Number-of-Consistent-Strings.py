class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        count = 0
        allowed_set = set(allowed)

        def isConsistentSet(word):
            for ch in word:
                if ch not in allowed_set:
                    return False
            
            return True

        for word in words:
            if isConsistentSet(word):
                count += 1

        return count