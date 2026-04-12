class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        num_set = set()

        for num in nums:
            if num in num_set:
                num_set.remove(num)
            else:
                num_set.add(num)

        return len(num_set) == 0