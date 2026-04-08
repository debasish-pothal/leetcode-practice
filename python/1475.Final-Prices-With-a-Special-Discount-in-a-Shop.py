class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        stack = []
        result = prices[:]

        for i in range(len(prices)):
            while len(stack) and prices[i] <= prices[stack[-1]]:
                idx = stack[-1]
                result[idx] = prices[stack[-1]] - prices[i]
                stack.pop()
            stack.append(i)

        return result