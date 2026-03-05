class Solution:
    def countOdds(self, low: int, high: int) -> int:
        first_odd = low % 2
        last_odd = high % 2
        total = (high - low) + 1
        remainining = total - (first_odd + last_odd)
        remainining_odd = remainining // 2

        return first_odd + last_odd + remainining_odd
