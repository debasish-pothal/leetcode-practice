class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        mismatches = []

        for i in range(len(s1)):
            if s1[i] != s2[i]:
                mismatches.append(i)
            
            if len(mismatches) > 2:
                return False

        if len(mismatches) == 1:
            return False

        if len(mismatches) == 0:
            return True

        i, j = mismatches
        return s1[i] == s2[j] and s1[j] == s2[i]