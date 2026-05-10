class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        buy_price = prices[0]

        for i in range(1, len(prices)):
            buy_price = min(buy_price, prices[i])
            profit = max(profit, prices[i] - buy_price)

        return profit