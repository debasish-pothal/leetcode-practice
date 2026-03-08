class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        isInc = True
        isDec = True
        prev = nums[0]

        for i in range(1, len(nums)):
            curr = nums[i]

            if curr < prev:
                isInc = False
            if curr > prev:
                isDec = False

            prev = curr

            if not isInc and not isDec:
                return False
        
        return True