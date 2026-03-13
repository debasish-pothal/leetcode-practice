class Solution:
    def largestOddNumber(self, num: str) -> str:
        for i in reversed(range(len(num))):
            d = num[i]

            if d in ['1', '3', '5', '7', '9']:
                return num[0:i+1]
            
        return ''