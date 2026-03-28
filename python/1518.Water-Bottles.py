class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        total = numBottles

        while numBottles >= numExchange:
            exchange = numBottles // numExchange
            remaining = numBottles % numExchange

            numBottles = exchange + remaining
            total += exchange

        return total