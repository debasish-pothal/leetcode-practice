class Solution:
    def makeGood(self, s: str) -> str:
        stk = []

        for i in range(len(s)):
            if len(stk) and s[i] != stk[-1] and s[i].lower() == stk[-1].lower():
                stk.pop()
            else:
                stk.append(s[i])

        return "".join(stk)