class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        freq = Counter(students)
        res = len(students)

        for s in sandwiches:
            if freq[s] > 0:
                res -= 1
                freq[s] -= 1
            else:
                break

        return res