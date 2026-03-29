class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        height_map = {}
        sorted_names = []

        for i in range(len(names)):
            height_map[heights[i]] = names[i]

        for height, name in sorted(height_map.items(), reverse=True):
            sorted_names.append(name)

        return sorted_names