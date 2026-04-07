class Solution:
    def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:
        heap = [(val, idx) for idx, val in enumerate(nums)]
        heapq.heapify(heap)

        nums_copy = nums[:]

        while k:
            val, idx = heapq.heappop(heap)
            new_val = val * multiplier
            nums_copy[idx] = new_val
            heapq.heappush(heap, (new_val, idx))
            k -= 1

        return nums_copy