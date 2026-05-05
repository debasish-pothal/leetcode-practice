class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        index = 0

        while index < len(haystack):
            if haystack[index] == needle[0]:
                p1 = index
                p2 = 0

                while p2 < len(needle) and p1 < len(haystack) and haystack[p1] == needle[p2]:
                    p1 += 1
                    p2 += 1

                if p2 == len(needle):
                    return index

            index += 1

        return -1