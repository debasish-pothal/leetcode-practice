class ListNode:

    def __init__(self, key = -1, val = -1, next = None):
        self.key = key
        self.val = val
        self.next = next

class MyHashSet:

    def __init__(self):
        self.size = 10000
        self.set = [ListNode() for i in range(self.size)]

    def hash(self, key: int) -> int:
        return key % self.size

    def add(self, key: int) -> None:
        hashkey = self.hash(key)
        curr = self.set[hashkey]

        while curr:
            if curr.key == key and curr.val == key:
                return
            if not curr.next:
                break

            curr = curr.next
        curr.next = ListNode(key, key)

    def remove(self, key: int) -> None:
        hashkey = self.hash(key)
        dummy = self.set[hashkey]
        prev = dummy
        curr = dummy.next

        while curr:
            if curr.key == key and curr.val == key:
                prev.next = curr.next
                return
            prev = curr 
            curr = curr.next

    def contains(self, key: int) -> bool:
        hashkey = self.hash(key)
        curr = self.set[hashkey]

        while curr:
            if curr.key == key and curr.val == key:
                return True
            curr = curr.next
        return False


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)