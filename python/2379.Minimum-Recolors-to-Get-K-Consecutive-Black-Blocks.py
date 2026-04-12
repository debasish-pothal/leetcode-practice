class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        count_w , min_w = 0, 0

        for i in range(k):
            if blocks[i] == 'W':
                count_w += 1

        min_w = count_w

        for i in range(k, len(blocks)):
            if blocks[i - k] == 'W':
                count_w -= 1
            if blocks[i] == 'W':
                count_w += 1
            min_w = min(min_w, count_w)

        return min_w