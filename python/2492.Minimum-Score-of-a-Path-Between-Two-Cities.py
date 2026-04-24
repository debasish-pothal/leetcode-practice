class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        adj_list = defaultdict(list)
        visited = set()
        result = float("inf")

        for src, dst, dist in roads:
            adj_list[src].append((dst, dist))
            adj_list[dst].append((src, dist))

        def dfs(node):
            nonlocal result
            if node in visited:
                return
            visited.add(node)
            for dst, dist in adj_list[node]:
                result = min(result, dist)
                dfs(dst)

        dfs(1)

        return result