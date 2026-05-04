class Solution:
    def maxArea(self, height: List[int]) -> int:
        area = 0
        start = 0
        end = len(height) - 1

        while start < end:
            w = end - start
            h = min(height[start], height[end])

            area = max(area, w * h)

            if height[start] < height[end]:
                start += 1
            else:
                end -= 1

        return area