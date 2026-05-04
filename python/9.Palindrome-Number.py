class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False

        n1 = 0
        n2 = abs(x)

        while n2:
            n1 *= 10
            n1 += n2 % 10
            n2 //= 10

        return n1 == x