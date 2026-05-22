class MyStack:

    def __init__(self):
        self.pushQ = []
        self.popQ = []

    def push(self, x: int) -> None:
        while len(self.pushQ):
            self.popQ.append(self.pushQ.pop())

        self.pushQ.append(x)

        while len(self.popQ):
            self.pushQ.append(self.popQ.pop())

    def pop(self) -> int:
        while len(self.pushQ):
            self.popQ.append(self.pushQ.pop())

        num = self.popQ.pop()

        while len(self.popQ):
            self.pushQ.append(self.popQ.pop())

        return num

    def top(self) -> int:
        return self.pushQ[0]

    def empty(self) -> bool:
        return len(self.pushQ) == 0 and len(self.popQ) == 0


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()