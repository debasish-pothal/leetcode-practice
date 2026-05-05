class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        result = []
        n = len(nums)
        nums.sort()

        for i in range(n):
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            num = nums[i]
            req = -1 * num

            start = i + 1
            end = n - 1

            while start < end:
                temp = nums[start] + nums[end]

                if temp < req:
                    start += 1
                elif temp > req:
                    end -= 1
                else:
                    result.append([num, nums[start], nums[end]])

                    start += 1
                    end -= 1

                    while start < end and nums[start] == nums[start - 1]:
                        start += 1
                    while start < end and nums[end] == nums[end + 1]:
                        end -= 1 

        return result