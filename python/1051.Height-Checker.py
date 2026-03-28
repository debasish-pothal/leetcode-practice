class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        count = [0] * 101
        mismatches = 0
        current_height = 1

        for height in heights:
            count[height] += 1

        for i in range(len(heights)):
            while count[current_height] == 0:
                current_height += 1

            if heights[i] != current_height:
                mismatches += 1

            count[current_height] -= 1

        return mismatches