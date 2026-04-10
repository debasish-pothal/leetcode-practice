class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        for i in range(len(nums) - 1):
            if (nums[i] == nums[i + 1]):
                nums[i] *= 2
                nums[i + 1] = 0

        idx = 0
        zidx = 0

        while idx < len(nums):
            if nums[idx] != 0:
                nums[idx], nums[zidx] = nums[zidx], nums[idx]
                zidx += 1
            idx += 1

        return nums