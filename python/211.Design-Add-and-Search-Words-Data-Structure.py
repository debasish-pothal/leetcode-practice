class WordDictionary:

    def __init__(self):
        self.root = {}

    def addWord(self, word: str) -> None:
        node = self.root

        for c in word:
            if c not in node:
                node[c] = {}
            node = node[c]

        node["isEnd"] = True

    def search(self, word: str) -> bool:
        def dfs(node, index):
            if index == len(word):
                return node.get("isEnd", False)

            c = word[index]

            if c == ".":
                for key in node:
                    if key != "isEnd":
                        if dfs(node[key], index + 1):
                            return True
                return False

            if c not in node:
                return False

            return dfs(node[c], index + 1)

        return dfs(self.root, 0)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)