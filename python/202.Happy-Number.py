class Solution:
    def isHappy(self, n: int) -> bool:
        slow = n
        fast = n

        def digitSum(num):
            total = 0

            while num:
                rem = num % 10
                total += (rem * rem)
                num = num // 10

            return total

        while (True):
            slow = digitSum(slow)
            fast = digitSum(digitSum(fast))

            if slow == fast:
                return slow == 1
        
        return False