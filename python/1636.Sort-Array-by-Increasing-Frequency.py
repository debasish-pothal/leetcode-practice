class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        freq = Counter(nums)

        def customSort(n):
            return (freq[n], -n)

        nums.sort(key=customSort)

        return nums