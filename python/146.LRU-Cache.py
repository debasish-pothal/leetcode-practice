class LRUCache:

    def __init__(self, capacity: int):
        self.map = {}
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key in self.map:
            val = self.map[key]
            del self.map[key]
            self.map[key] = val
            return val

        return -1

    def put(self, key: int, value: int) -> None:
        if self.get(key) == -1:
            if len(self.map) == self.capacity:
                for k, v in self.map.items():
                    del self.map[k]
                    break

        self.map[key] = value


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)