class Solution:
    def findXSum(self, nums: List[int], k: int, x: int) -> List[int]:
        result = []
        n = len(nums)

        for i in range(n - k + 1):
            freq = Counter(nums[i:i+k])
            
            sorted_items = sorted(freq.items(), key=lambda x: (-x[1], -x[0]))

            top_x = sorted_items[:x]

            total = sum(num * count for num, count in top_x)

            result.append(total)

        return result