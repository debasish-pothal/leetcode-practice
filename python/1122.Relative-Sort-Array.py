class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        freq = Counter(arr1)
        res = []

        for n in arr2:
            if n in freq:
                res.extend([n] * freq[n])
                del freq[n]
        
        for n in sorted(freq):
            res.extend([n] * freq[n])

        return res