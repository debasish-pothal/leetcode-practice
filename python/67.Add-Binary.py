class Solution:
    def addBinary(self, a: str, b: str) -> str:
        result = ""
        i = len(a) - 1
        j = len(b) - 1
        cary = 0

        while i >= 0 or j >= 0 or cary:
            total = cary + (int(a[i]) if i >= 0 else 0) + (int(b[j]) if j >= 0 else 0)

            result = str(total % 2) + result
            cary = total // 2

            i -= 1
            j -= 1

        return result