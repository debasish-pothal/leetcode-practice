class Solution:
    def minimumDistance(self, nums: List[int]) -> int:
        index_map = defaultdict(list)
        min_distance = float('inf')

        for i, num in enumerate(nums):
            index_map[num].append(i)

        for indices in index_map.values():
            if len(indices) >= 3:
                for t in range(len(indices) - 2):
                    i, j, k = indices[t], indices[t + 1], indices[t + 2]
                    cur_distance = abs(i - j) + abs(j - k) + abs(k - i)
                    min_distance = min(min_distance, cur_distance)

        return -1 if min_distance == float('inf') else min_distance