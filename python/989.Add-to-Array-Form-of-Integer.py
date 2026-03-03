class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        result = []
        cary = 0
        idx = len(num) - 1

        while idx >= 0 or k:
            num1 = num[idx] if idx >= 0 else 0
            num2 = k % 10
            k = k // 10

            total = num1 + num2 + cary

            cary = total // 10
            result.append(total % 10)
            idx -= 1

        if cary:
            result.append(cary)

        return result[::-1]