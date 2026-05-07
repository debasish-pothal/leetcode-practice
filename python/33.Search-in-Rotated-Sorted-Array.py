class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = left + ((right - left) // 2)

            l = nums[left]
            m = nums[mid]
            r = nums[right]

            if m == target:
                return mid

            if l <= m:
                if l <= target and target < m:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if m < target and target <= r:
                    left = mid + 1
                else:
                    right = mid - 1

        return -1