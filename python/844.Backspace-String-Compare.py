class Solution:
    def build(self, string):
        stack = []
        for c in string:
            if c == "#":
                if stack:
                    stack.pop()
            else:
                stack.append(c)
        return stack

    def backspaceCompare(self, s: str, t: str) -> bool:
        return self.build(s) == self.build(t)
