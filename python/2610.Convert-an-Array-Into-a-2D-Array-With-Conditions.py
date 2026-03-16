class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        result = []
        freq = defaultdict(int)

        for num in nums:
            freq[num] += 1
            row = freq[num] - 1

            if row == len(result):
                result.append([])

            result[row].append(num)

        return result