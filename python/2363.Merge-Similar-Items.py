class Solution:
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        items = {}

        for key, val in items1:
            items[key] = items.get(key, 0) + val

        for key, val in items2:
            items[key] = items.get(key, 0) + val

        return [[k, v] for k, v in sorted(items.items())]