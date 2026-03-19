class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n <= 0:
            return False
        binary = bin(n)
        count = binary.count("1")

        return count == 1