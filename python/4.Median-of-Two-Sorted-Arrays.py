class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        curr = 0
        prev = 0
        total = len(nums1) + len(nums2)
        mid = total // 2
        i = 0
        j = 0

        for k in range(mid + 1):
            prev = curr

            if i < len(nums1) and (j >= len(nums2) or nums1[i] < nums2[j]):
                curr = nums1[i]
                i += 1
            else:
                curr = nums2[j]
                j += 1

        return (curr + prev) / 2 if total % 2 == 0 else curr