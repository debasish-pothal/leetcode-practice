class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        prereq_map = {}
        visited = set()

        for i in range(numCourses):
            prereq_map[i] = []

        for course, prereq in prerequisites:
            prereq_map[course].append(prereq)

        def dfs(course):
            if course in visited:
                return False
            
            if len(prereq_map[course]) == 0:
                return True

            visited.add(course)

            for prereq in prereq_map[course]:
                if not dfs(prereq):
                    return False

            visited.remove(course)
            prereq_map[course] = []

            return True

        for i in range(numCourses):
            if not dfs(i):
                return False

        return True