class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        tMap = {}

        for c in t:
            if c not in tMap:
                tMap[c] = 0
            tMap[c] += 1

        for c in s:
            tMap[c] -= 1
            if tMap[c] == 0:
                del tMap[c]

        for key in tMap:
            return key

        return ""