class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        result = []
        visited = set()
        visiting = set()
        prereq_map = {}

        for i in range(numCourses):
            prereq_map[i] = []

        for course, prereq in prerequisites:
            prereq_map[course].append(prereq)

        def dfs(course):
            if course in visited:
                return True

            if course in visiting:
                return False

            visiting.add(course)

            for prereq in prereq_map[course]:
                if not dfs(prereq):
                    return False
            
            result.append(course)
            visiting.remove(course)
            visited.add(course)

            return True

        for i in range(numCourses):
            if not dfs(i):
                return [] 

        return result