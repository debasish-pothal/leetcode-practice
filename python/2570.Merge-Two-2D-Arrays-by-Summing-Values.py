class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        idx1, idx2 = 0, 0
        result = []

        while idx1 < len(nums1) and idx2 < len(nums2):
            i1, v1 = nums1[idx1]
            i2, v2 = nums2[idx2]

            if i1 == i2:
                result.append([i1, v1 + v2])
                idx1 += 1
                idx2 += 1
            elif i1 < i2:
                result.append(nums1[idx1])
                idx1 += 1
            else:
                result.append(nums2[idx2])
                idx2 += 1

        while idx1 < len(nums1):
            result.append(nums1[idx1])
            idx1 += 1

        while idx2 < len(nums2):
            result.append(nums2[idx2])
            idx2 += 1

        return result