class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        cities = set()

        for start, end in paths:
            cities.add(start)

        for start, end in paths:
            if end not in cities:
                return end

        return ""