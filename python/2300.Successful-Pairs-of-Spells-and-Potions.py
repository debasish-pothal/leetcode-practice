class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        result = []
        potions.sort()

        for spell in spells:
            left = 0
            right = len(potions) - 1
            index = len(potions)

            while left <= right:
                mid = (left + right) // 2
                potion_success = spell * potions[mid]

                if potion_success >= success:
                    index = mid
                    right = mid - 1
                else:
                    left = mid + 1
            
            result.append(len(potions) - index)

        return result