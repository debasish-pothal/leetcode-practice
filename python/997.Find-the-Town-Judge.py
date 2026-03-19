class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        trust_list = [0] * n

        for j1, j2 in trust:
            trust_list[j1 - 1] -= 1
            trust_list[j2 - 1] += 1

        for i in range(n):
            if trust_list[i] == n - 1:
                return i + 1

        return -1