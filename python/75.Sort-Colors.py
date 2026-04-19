class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        index = n - 1
        zindex = n - 1

        while index >= 0:
            if nums[index] != 0:
                nums[index], nums[zindex] = nums[zindex], nums[index]
                zindex -= 1
            index -= 1

        index = zindex + 1
        tindex = zindex + 1

        while index < n:
            if nums[index] != 2:
                nums[index], nums[tindex] = nums[tindex], nums[index]
                tindex += 1
            index += 1