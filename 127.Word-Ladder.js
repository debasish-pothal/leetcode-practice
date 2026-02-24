/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) return 0;

  const neighbours = new Map();
  wordSet.add(beginWord);

  for (const word of wordSet) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1);

      if (!neighbours.has(pattern)) {
        neighbours.set(pattern, []);
      }

      neighbours.get(pattern).push(word);
    }
  }

  const q = [beginWord];
  const visited = new Set([beginWord]);
  let result = 1;

  while (q.length) {
    const size = q.length;

    for (let s = 0; s < size; s++) {
      const word = q.shift();

      if (word === endWord) return result;

      for (let i = 0; i < word.length; i++) {
        const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
        const neighbourWords = neighbours.get(pattern) || [];

        for (const neighbourWord of neighbourWords) {
          if (!visited.has(neighbourWord)) {
            visited.add(neighbourWord);
            q.push(neighbourWord);
          }
        }
      }
    }

    result += 1;
  }

  return 0;
};
