class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}

        for c in s:
            if c in mapping:
                if not stack or mapping[c] != stack[-1]:
                    return False
                stack.pop()
            else:
                stack.append(c)

        return not stack
