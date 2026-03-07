class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        set1 = set(nums1)
        set2 = set(nums2)

        diff1 = list(filter(lambda x: x not in set2, set1))
        diff2 = list(filter(lambda x: x not in set1, set2))

        return [diff1, diff2]