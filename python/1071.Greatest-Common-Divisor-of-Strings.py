class Solution:
    def gcd(self, a: int, b: int) -> int:
        while b != 0:
            r = a % b
            a = b
            b = r
        return a

    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if str1 + str2 != str2 + str1:
            return ""

        i = self.gcd(len(str1), len(str2))

        return str1[0:i]