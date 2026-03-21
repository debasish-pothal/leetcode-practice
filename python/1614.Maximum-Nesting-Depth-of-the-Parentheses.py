class Solution:
    def maxDepth(self, s: str) -> int:
        max_count = 0
        cur_count = 0

        for c in s:
            if c == "(":
                cur_count += 1
            elif c == ")":
                cur_count -= 1
            max_count = max(max_count, cur_count)
        
        return max_count