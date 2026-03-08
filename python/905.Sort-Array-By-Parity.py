class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        even = 0
        odd = len(nums) - 1

        while even < odd:
            if nums[even] % 2 != 0:
                nums[even], nums[odd] = nums[odd], nums[even]
                odd -= 1
            else:
                even += 1
        
        return nums