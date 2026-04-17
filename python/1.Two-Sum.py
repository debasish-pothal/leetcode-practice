class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        result = []
        index_map = {}

        for i in range(len(nums)):
            req = target - nums[i]

            if req in index_map:
                return [i, index_map[req]]

            index_map[nums[i]] = i

        return []