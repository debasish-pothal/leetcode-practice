class ListNode:
    def __init__(self, key = -1, val = -1, next = None):
        self.key = key
        self.val = val
        self.next = next

class MyHashMap:

    def __init__(self):
        self.map = [ListNode() for i in range(1000)]

    def hash(self, key: int) -> int:
        return key % len(self.map)

    def put(self, key: int, val: int) -> None:
        curr = self.map[self.hash(key)]

        while curr:
            if curr.key == key:
                curr.val = val
                return
            if not curr.next:
                break
            curr = curr.next
        curr.next = ListNode(key, val)

    def get(self, key: int) -> int:
        curr = self.map[self.hash(key)]

        while curr:
            if curr.key == key:
                return curr.val
            curr = curr.next
        return -1

    def remove(self, key: int) -> None:
        dummy = self.map[self.hash(key)]
        prev = dummy
        curr = dummy.next

        while curr:
            if curr.key == key:
                prev.next = curr.next
                return
            prev = curr
            curr = curr.next
        


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)