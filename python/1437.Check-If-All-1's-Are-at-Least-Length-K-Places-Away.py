class Solution:
    def kLengthApart(self, nums: List[int], k: int) -> bool:
        length = k

        for num in nums:
            if num == 1:
                if length < k:
                    return False
                else:
                    length = 0
            else:
                length += 1

        return True