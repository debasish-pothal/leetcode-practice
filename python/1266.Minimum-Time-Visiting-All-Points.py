class Solution:
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        time = 0

        for i in range(0, len(points) - 1):
            cur_x, cur_y = points[i]
            tar_x, tar_y = points[i + 1]

            time += max(
                abs(cur_x - tar_x),
                abs(cur_y - tar_y)
            )

        return time