class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        heap = [-val for val in gifts]
        heapq.heapify(heap)

        while k:
            val = -heapq.heappop(heap)
            heapq.heappush(heap, -floor(sqrt(val)))
            k -= 1

        return -sum(heap)